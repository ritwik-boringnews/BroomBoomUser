import axios from 'axios';
export default class API {
  constructor(options) {
    this.axiosInstance = axios.create({
      baseURL: options.baseUrl,
    });
    this.axiosInstance.interceptors.request.use(
      function (config) {
        return config;
      },
      function (error) {
        return Promise.reject(error);
      },
    );

    this.axiosInstance.interceptors.response.use(
      function (response) {
        return response;
      },
      function (error) {
        // Any status codes that falls outside the range of 2xx cause this function to trigger
        // Do something with response error
        return Promise.reject(error);
      },
    );
  }

  get(endpoint, params, header) {
    return this.httpRequest('GET', endpoint, params, header);
  }

  post(endpoint, params, header) {
    return this.httpRequest('POST', endpoint, params, header);
  }

  update(endpoint, params, header) {
    return this.httpRequest('PUT', endpoint, params, header);
  }

  postForm(endpoint, params, header) {
    return this.httpRequestForFormData(endpoint, params, header);
  }

  async httpRequest(method, url, params, header = null) {
    let clientToken =
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NiwibmFtZSI6Im5laGEiLCJlbWFpbCI6Im5laGFAZ21haWwuY29tIiwibW9iaWxlIjo4NDIwMTk4NTQwLCJpYXQiOjE2NjEzMjMwMjAsImV4cCI6MTY2MzM5NjYyMH0.TlT4R_J36aFrirXmKmPFtBxeUupSy7pENy_3jxr_Q9E';
    return new Promise((resolve, reject) => {
      let options;
      if (method === 'GET') {
        options = {
          url: url,
          headers: header
            ? header
            : {
                authorization: clientToken ? `Bearer ${clientToken}` : null,
                'Content-Type': 'application/json',
              },
          method: method,
        };
      } else {
        options = {
          url: url,
          headers: header
            ? header
            : {
                authorization: clientToken ? `Bearer ${clientToken}` : null,
                'Content-Type': 'application/json',
              },
          method: method,
          data: params,
        };
      }
      this.axiosInstance
        .request(options)
        .then(response => {
          resolve({
            status: response.status,
            ...response.data,
          });
        })
        .catch(error => {
          reject(error);
        });
    });
  }
}
