/* eslint-disable react-hooks/rules-of-hooks */
import useSWR from "swr";
import api from "./api";

class Login {
  login = (data: any) => {
    return api()
      .post("login/", data)
      .then((res) => {
        return res.data;
      });
  };
  useCurrentUser() {
    return useSWR<any, any>("current_user", () => {
      return api()
        .get("login/current/")
        .then((res) => {
          return res.data;
        });
    });
  }
}

export default new Login();
