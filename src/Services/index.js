import API from "./ApiServices";

export const baseUrl = "http://192.168.1.52:7000/api/v1";
// export const baseUrl = "http://43.205.135.42:8000/api/v1";

const Api = new API({
  baseUrl: baseUrl,
});

export default Api;
