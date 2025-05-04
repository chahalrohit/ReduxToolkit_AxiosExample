import {
  GET_USERS_ENDPOINT,
  CREATE_USER_ENDPOINT,
  UPDATE_USER_ENDPOINT,
  DELETE_USER_ENDPOINT,
} from './axios.endpoint';

export const GET_USERS = async (request: any) => {
  try {
    return await request(GET_USERS_ENDPOINT, request);
  } catch (error) {
    console.error(error);
  }
};
