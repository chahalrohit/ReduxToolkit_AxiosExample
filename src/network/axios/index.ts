import AxiosInstance from '../../utils/AxiosInstance';

const doPostMethod = async (endPoint: string, data?: any, token?: string) => {
  delete AxiosInstance.defaults.headers.common['Content-Type'];
  delete AxiosInstance.defaults.headers.post['Content-Type'];
  AxiosInstance.defaults.headers.common['Content-Type'] = 'application/json';
  AxiosInstance.defaults.headers.common['Accept'] = 'application/json';
  console.log('\n');
  console.log('<<----doPostMethod-->>');
  console.log('endPoint :: ', endPoint);
  console.log('token :: ', token);
  console.log('data :: ', data);
  console.log('\n');
  if (token) {
    AxiosInstance.defaults.headers.common['Authorization'] = 'Bearer ' + token;
  } else {
    delete AxiosInstance.defaults.headers.common['Authorization'];
  }
  try {
    return await AxiosInstance(endPoint, {
      method: 'POST',
      data,
    });
  } catch (error) {
    console.log('doPostMethod error', error);
    throw error;
  }
};

const doGetMethod = async (
  endPoint: string,
  token?: string,
  params: any = {},
) => {
  console.log('\n');
  console.log('<<----doGetMethod-->>');
  console.log('endPoint :: ', endPoint);
  console.log('token :: ', token);
  console.log('params :: ', params);
  console.log('\n');
  delete AxiosInstance.defaults.headers.common['Authorization'];
  AxiosInstance.defaults.headers.common['Content-Type'] = 'application/json';
  if (token) {
    AxiosInstance.defaults.headers.common['Authorization'] = 'Bearer ' + token;
  }
  try {
    return await AxiosInstance(endPoint, {
      method: 'GET',
      params,
    });
  } catch (error) {
    console.log(`doGetMethod endpoint: ${endPoint}, error: ${error}`);
    throw error;
  }
};

const doPutMethod = async (endPoint: string, data?: any, token?: string) => {
  console.log('\n');
  console.log('<<----doPutMethod-->>');
  console.log('endPoint :: ', endPoint);
  // console.log('token :: ', token);
  console.log('params :: ', data);
  console.log('\n');
  AxiosInstance.defaults.headers.common['Content-Type'] = 'application/json';
  if (token) {
    AxiosInstance.defaults.headers.common['Authorization'] = 'Bearer ' + token;
  }
  try {
    return await AxiosInstance(endPoint, {
      method: 'PUT',
      data,
    });
  } catch (error) {
    console.log('doPutMethod error', error);
    throw error;
  }
};

const doDeleteMethod = async (
  endPoint: string,
  data?: any,
  token?: string,
  requestBody: string = 'PARAMS',
) => {
  console.log('\n');
  console.log('<<----doDeleteMethod-->>');
  console.log('endPoint :: ', endPoint);
  // console.log('token :: ', token);
  console.log('data :: ', data);
  console.log('\n');
  AxiosInstance.defaults.headers.common['Content-Type'] = 'application/json';
  if (token) {
    AxiosInstance.defaults.headers.common['Authorization'] = 'Bearer ' + token;
  }
  try {
    const request = {
      method: 'DELETE',
    } as any;
    if (requestBody === 'DATA') {
      request.data = data;
    } else {
      request.params = data;
    }
    return await AxiosInstance(endPoint, request);
  } catch (error) {
    console.log('doDeleteMethod error', error);
    throw error;
  }
};

export {doPostMethod, doGetMethod, doPutMethod, doDeleteMethod};
