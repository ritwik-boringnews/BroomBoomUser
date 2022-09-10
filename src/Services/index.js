import API from "./ApiServices";

export const appDomains = {
  asish: "192.168.0.102",
  mainak: "192.168.29.78",
  dev: "43.205.135.42",
  prod: "www.9teesplus.in",
};
const PILOT_PORT = 7000;
const USER_PORT = 8000;

export const baseUrlUser = `http://${appDomains.prod}:${USER_PORT}/api/v1`;
export const baseUrlPilot = `http://${appDomains.prod}:${PILOT_PORT}/api/v1`;

const Api = new API({
  baseUrl: baseUrlUser,
});

export const ApiPilot = new API({
  baseUrl: baseUrlPilot,
});

export default Api;

export const API_ENDPOINTS = {
  PILOT: {
    getGeoLocationText: "map/get-geo-code",
  },
};

export const IS_LOCAL = true;
