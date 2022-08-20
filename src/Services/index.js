import API from "./ApiServices";

export const baseUrl = "http://192.168.0.102:7000/api/v1";
// export const baseUrl = "http://3.110.168.181:7000/api/v1";

const Api = new API({
  baseUrl: baseUrl,
});

export default Api;
