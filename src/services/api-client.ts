import axios, { AxiosRequestConfig } from "axios";

export interface FetchResponse<T> {
  count: number;
  next: string | null;
  results: T[];
}

const axiosInterface = axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "7005398740524cd1a3d10fb451f7fb95",
  },
});

export class APIClient<T> {
  endpoint: string;
  constructor(endpoint: string) {
    this.endpoint = endpoint;
  }

  getAll = (config: AxiosRequestConfig) =>
    axiosInterface
      .get<FetchResponse<T>>(this.endpoint, config)
      .then((res) => res.data);
}
