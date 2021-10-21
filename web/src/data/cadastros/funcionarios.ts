/* eslint-disable react-hooks/rules-of-hooks */
import api from "data/api";
import DataModule from "data/main";
import useSWR from "swr";

class Funcionarios extends DataModule {
  useModel(queryParams: any) {
    let _queryParms = {
      func: true,
      funcionario_ativo: true,
      ...queryParams,
    };
    return useSWR<any, any>(
      `${this.namespace}?${JSON.stringify(_queryParms)}`,
      async () => {
        const res = await api().get(`/${this.namespace}/`, {
          params: _queryParms,
        });
        return res.data;
      }
    );
  }
}

export default new Funcionarios("pessoa");
