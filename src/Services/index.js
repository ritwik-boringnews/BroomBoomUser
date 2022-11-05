import API from "./ApiServices";

export const appDomains = {
  ashis: "192.168.0.106",
  mainak: "192.168.29.78",
  dev: "43.205.135.42",
  prod: "www.9teesplus.in",
  alsolDev: "192.168.1.97",
};
const PILOT_PORT = 7000;
const USER_PORT = 8000;

export const baseUrlUser = `http://${appDomains.dev}:${USER_PORT}/api/v1`;
export const baseUrlPilot = `http://${appDomains.dev}:${PILOT_PORT}/api/v1`;
export const socketUrl = `http://${appDomains.dev}:7000`;

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

export const SOCKET_ENDPOINTS = {
  userRequestingRide: "user_requesting_ride",
  PILOT_RIDE_INCOMING_NOTIF: "pilot_ride_notif",
};

export const SOCKET_INIT_OPTIONS_CONFIG = {
  path: "/api/socket",
};

/**
 * {
  CONNECTION: "connection",
  DISCONNECT: "disconnect",
  JOIN_ROOM: "join_room",
  PILOT_GEO_SYNC: "pilot_geo_sync",
  PILOT_STATUS_SYNC: "pilot_status_sync",
  USER_REQUESTING_RIDE: "user_requesting_ride",
  PILOT_RIDE_INCOMING_NOTIF: "pilot_ride_notif",
  PILOT_ACCEPT_INCOMING_RIDE: "pilot_accept_incoming_ride",
  PILOT_REJECT_INCOMING_RIDE: "pilot_reject_incoming_ride",
};
 */
