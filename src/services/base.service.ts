import { Axios } from "axios";

export class BaseService {
  baseUrl = process.env.REACT_APP_BASE_URL;
  axios: Axios;
  constructor() {
    this.axios = new Axios({ baseURL: this.baseUrl });
  }
  get<T = any>(url: string) {
    return this.axios
      .get<T>(url)
      .then((response) => JSON.parse(response.data as string));
  }
  post<T = any>(url: string, data: any) {
    return this.axios.post<T>(url, data).then((response) => response.data);
  }
}
