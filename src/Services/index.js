import API from "./ApiServices";
const localIps = {
  asish: "192.168.0.102",
  mainak: "192.168.29.78",
  mainLocal: "43.205.135.42",
};
export const baseUrl = `http://${localIps.mainLocal}:8000/api/v1`;
// export const baseUrl = "http://43.205.135.42:8000/api/v1";

const Api = new API({
  baseUrl: baseUrl,
});

export default Api;
