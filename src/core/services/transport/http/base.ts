import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';

const CONTENT_TYPE_URLENCODED = 'application/x-www-form-urlencoded';
const CONTENT_TYPE_JSON = 'application/json';
const CONTENT_TYPE_FORMDATA = 'multipart/form-data';
const CONTENT_TYPE_IMAGE: RegExp = new RegExp('image/[a-zA-Z]+');
const CONTENT_TYPE_VIDEO: RegExp = new RegExp('video/[a-zA-Z]+');
const CONTENT_TYPE_PDF = 'application/pdf';

declare module 'axios' {
  interface AxiosResponse<T = any> extends Promise<T> {}
}

class HttpTransport<T extends object> {
  instance: AxiosInstance;
  constructor(baseURL?: string) {
    if (baseURL) {
      this.instance = axios.create({
        baseURL,
      });
    } else {
      this.instance = axios.create();
    }
    this._initializeResponseInterceptor();
  }

  private _initializeResponseInterceptor = () => {
    this.instance.interceptors.response.use(
      this._handleResponse,
      this._handleError,
    );
  };

  private _handleResponse = ({ data }: AxiosResponse<T>) => {
    return data;
  };

  private _handleError = (error: any) => Promise.reject(error.response);

  protected get = (
    url: string,
    token?: string,
    config?: AxiosRequestConfig,
  ) => {
    let _config: AxiosRequestConfig = {};
    if (config) {
      _config = { ...config };
    }
    if (token) {
      _config = {
        headers: { Authorization: `Bearer ${token}` },
      };
    }
    return this.instance.get<T>(url, _config);
  };

  protected post = (
    url: string,
    data?: any,
    type?: string,
    token?: string,
    config?: AxiosRequestConfig,
  ) => {
    let ContentDisposition: string | undefined;
    let body: any | undefined;
    if (data) {
      if (type === CONTENT_TYPE_URLENCODED) {
        if (data.length) {
          const params: URLSearchParams[] = new Array(data.length).fill(
            new URLSearchParams(),
          );
          for (let i = 0; i < data.length; i++) {
            for (const key in data[i]) {
              params[i].append(key, data[i][key]);
            }
          }
          body = params;
        } else {
          const params = new URLSearchParams();
          for (const key in data) {
            if (typeof data[key] === 'object') {
              params.append(key, JSON.stringify(data[key]));
            } else {
              params.append(key, data[key]);
            }
          }
          body = params;
        }
      } else if (type === CONTENT_TYPE_JSON) {
        body = JSON.stringify(data);
      } else if (type === CONTENT_TYPE_FORMDATA) {
        if (data.length) {
          const formData: FormData[] = new Array(data.length).fill(
            new FormData(),
          );
          for (let i = 0; i < data.length; i++) {
            for (const key in data[i]) {
              formData[i].append(key, data[i][key]);
            }
          }
          body = formData;
        } else {
          const formData = new FormData();
          for (const key in data) {
            if (typeof data[key] === 'object') {
              formData.append(key, JSON.stringify(data[key]));
            } else {
              formData.append(key, data[key]);
            }
          }
          body = formData;
        }
        // const formData = new FormData()
        // for (const key in data) {
        //   formData.append(key, data[key])
        // }
        // body = formData
      } else if (
        CONTENT_TYPE_IMAGE.test(type || '') ||
        CONTENT_TYPE_VIDEO.test(type || '') ||
        type === CONTENT_TYPE_PDF
      ) {
        ContentDisposition = 'inline;filename="' + data.name + '"';
        body = data.buffer;
      } else {
        body = JSON.stringify(data);
      }
    }
    let _config: AxiosRequestConfig = { headers: {} };
    if (config) {
      _config = { ...config };
    }

    if (type) {
      _config = {
        ..._config,
        headers: {
          'Content-Type': type,
        },
      };
    }

    if (ContentDisposition) {
      config = {
        ...config,
        headers: { ..._config.headers, ContentDisposition },
      };
    }

    if (token) {
      config = {
        headers: { ..._config.headers, Authorization: `Bearer ${token}` },
      };
    }
    return this.instance.post<T>(url, body, config);
  };

  protected put = (
    url: string,
    data?: any,
    type?: string,
    token?: string,
    config?: AxiosRequestConfig,
  ) => {
    let ContentDisposition: string | undefined;
    let body: any | undefined;
    if (data) {
      if (type === CONTENT_TYPE_URLENCODED) {
        if (data.length) {
          const params: URLSearchParams[] = new Array(data.length);
          for (let i = 0; i < data.length; i++) {
            for (const key in data[i]) {
              params[i].append(key, data[i][key]);
            }
          }
          body = params;
        } else {
          const params = new URLSearchParams();
          for (const key in data) {
            params.append(key, data[key]);
          }
          body = params;
        }
      } else if (type === CONTENT_TYPE_JSON) {
        body = JSON.stringify(data);
      } else if (type === CONTENT_TYPE_FORMDATA) {
        const formData = new FormData();
        for (const key in data) {
          formData.append(key, data[key]);
        }
        body = formData;
      } else if (
        CONTENT_TYPE_IMAGE.test(type || '') ||
        CONTENT_TYPE_VIDEO.test(type || '') ||
        type === CONTENT_TYPE_PDF
      ) {
        ContentDisposition = 'inline;filename="' + data.name + '"';
        body = data.buffer;
      } else {
        body = JSON.stringify(data);
      }
    }

    let _config: AxiosRequestConfig = { headers: {} };
    if (config) {
      _config = { ...config };
    }

    if (type) {
      _config = {
        ..._config,
        headers: {
          'Content-Type': type,
        },
      };
    }

    if (ContentDisposition) {
      config = {
        ...config,
        headers: { ..._config.headers, ContentDisposition },
      };
    }

    if (token) {
      config = {
        headers: { ..._config.headers, Authorization: `Bearer ${token}` },
      };
    }
    return this.instance.put<T>(url, body, config);
  };
}

export default HttpTransport;
