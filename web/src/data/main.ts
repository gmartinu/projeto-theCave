import useSWR, { mutate } from "swr";
import api from "./api";

export default class DataModule {
  namespace: string = "";
  response: any;

  /**
   *
   * @param namespace String para identificar o modelo
   */
  constructor(namespace: string) {
    this.namespace = namespace;
  }

  refreshModel(forceurl?: string) {
    return mutate(forceurl ? forceurl : this.namespace, undefined);
  }

  save = async (body: any) => {
    body.id
      ? (this.response = await api().patch(
          `/${this.namespace}/${body.id}/`,
          body
        ))
      : (this.response = await api().post(`/${this.namespace}/`, body));
    if (this.response.status === 201 || this.response.status === 200)
      this.refreshModel();
    return true;
  };

  get = async (id: number, params: Object = {}) => {
    const produtos = await api().get(
      id ? `/${this.namespace}/${id}/` : `/${this.namespace}/`,
      {
        params,
      }
    );
    if (produtos) {
      return produtos.data;
    } else {
      return null;
    }
  };

  delete = async (prod: number) => {
    const deleted = await api().delete(`/${this.namespace}/${prod}/`);
    if (deleted.status === 204) {
      this.refreshModel();
      return true;
    } else {
      return false;
    }
  };

  action = async (
    type: "post" | "get" | "delete",
    route: string,
    data: any,
    id: string = ""
  ) => {
    console.log(data);
    switch (type) {
      case "post":
        return await api().post(
          id
            ? `/${this.namespace}/${id}/${route}/`
            : `/${this.namespace}/${route}/`,
          data
        );
      case "get":
        return await api().get(
          id
            ? `/${this.namespace}/${id}/${route}/`
            : `/${this.namespace}/${route}/`,
          { params: data }
        );
      case "delete":
        return await api().delete(`/${this.namespace}/${route}/${id}/`);
    }
  };

  useModel(queryParms: Object = {}, id: number = 0, _paramsSerializer?: any) {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    return useSWR<any, any>(
      `${this.namespace}${JSON.stringify(queryParms)}`,
      async () => {
        const res = await api().get(
          id !== 0 ? `/${this.namespace}/${id}/` : `/${this.namespace}/`,
          {
            params: queryParms,
            paramsSerializer: _paramsSerializer,
          }
        );
        return res.data;
      }
    );
  }

  async _inserir(model: Object) {
    const res = await api().post(`/${this.namespace}/`, model);
    return res;
  }
}
