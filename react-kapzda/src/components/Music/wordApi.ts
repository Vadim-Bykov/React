import * as types from './store/types';

export const userData = {
  id: '605738bf2c42420015584d2a',
  email: 'bvntaev@gmail.com',
};
// 20272027

const tokenData = {
  message: 'Authenticated',
  token:
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYwNTczOGJmMmM0MjQyMDAxNTU4NGQyYSIsImlhdCI6MTYxNjMzOTQ1NCwiZXhwIjoxNjE2MzUzODU0fQ.5MCjObaniM2HlUKmjTmMsMTUqxf82jmN2tqxZwtppPs',
  refreshToken:
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYwNTczOGJmMmM0MjQyMDAxNTU4NGQyYSIsInRva2VuSWQiOiI0MDg0ZDNkYi1mZWMyLTRlNzAtOTI3ZS01ZmQ2YjJiMjIzZWMiLCJpYXQiOjE2MTYzMzk0NTQsImV4cCI6MTYxNjM1NTY1NH0.KQoXI5XZrDXj_aZAG7mxXAgrljPU_kTnExcU8DeXGVg',
  userId: '605738bf2c42420015584d2a',
};

const token = tokenData.token;

export const baseURL = 'https://react-learnwords-example.herokuapp.com';
// const withCredentials = true;

const headers = {
  //   Authorization: `Bearer ${token}`,
  Accept: 'application/json',
  'Content-Type': 'application/json',
};

const headersWthToken = { ...headers, Authorization: `Bearer ${token}` };

export const getWords = (pageNumber: number = 0, groupNumber: number = 0) => {
  return fetch(
    `${baseURL}/words?page=${pageNumber}&group=${groupNumber}`
  ).then((res) => res.json());
};

export const createUser = async (
  authData: types.TAuthData
): Promise<types.TUserData> => {
  const extraData = {
    method: 'POST',
    headers: headers,
    body: JSON.stringify(authData),
  };
  return fetch(`${baseURL}/users`, extraData).then((res) => res.json());
};

export const loginUser = async (authData: types.TAuthData) => {
  const extraData = {
    method: 'POST',
    headers: headers,
    body: JSON.stringify(authData),
  };
  return fetch(`${baseURL}/signin`, extraData)
    .then((res) => res.json())
    .then((tokenData) => tokenData.token);
};

export const createUserWords = (
  userId: string,
  wordId: string,
  difficulty: string
) => {
  const extraData = {
    method: 'POST',
    headers: headersWthToken,
    body: JSON.stringify({
      difficulty,
      optional: { testFieldString: 'test', testFieldBoolean: true },
    }),
  };

  return fetch(
    `${baseURL}/users/${userId}/words/${wordId}`,
    extraData
  ).then((res) => console.log(res.json()));
};

export const getUserWordByID = (userId: string, wordId: string) => {
  const extraData = {
    method: 'GET',
    headers: headersWthToken,
  };

  return fetch(`${baseURL}/users/${userId}/words/${wordId}`, extraData)
    .then((res) => res.json())
    .then((word) => console.log(word));
};

export const getAllUserWords = () => {
  const extraData = {
    method: 'GET',
    headers: headersWthToken,
  };

  return fetch(`${baseURL}/users/${userData.id}/words`, extraData)
    .then((res) => res.json())
    .then((words) => console.log(words));
};

// export const loginUser = (authData: TAuthData) =>
//   fetch(`${baseURL}/signin`, {
//     headers,
//     body: JSON.stringify(authData),
//   }).then((res) => console.log(res));

// export const loginUser = async (user: TAuthData) => {
//   const rawResponse = await fetch(
//     'https://react-learnwords-example.herokuapp.com/signin',
//     {
//       method: 'POST',
//       headers: {
//         Accept: 'application/json',
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify(user),
//     }
//   );
//   const content = await rawResponse.json();

//   console.log(content);
// };

// {id: "6057267c2c42420015584d28", email: "hello@user.com"}
// email: "hello@user.com"
// id: "6057267c2c42420015584d28"

// {message: "Authenticated",…}
// message: "Authenticated"
// refreshToken: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYwNTcyNjdjMmM0MjQyMDAxNTU4NGQyOCIsInRva2VuSWQiOiIxNDI3MWVhYi1kZDYzLTRiNDgtOTkxMS01NjFjODljMGZiMDciLCJpYXQiOjE2MTYzMjQzNDcsImV4cCI6MTYxNjM0MDU0N30.7599F_bS-QfLAFJdZzzNZiqqNCxmzVrgE-nOF6MqAho"
// token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYwNTcyNjdjMmM0MjQyMDAxNTU4NGQyOCIsImlhdCI6MTYxNjMyNDM0NywiZXhwIjoxNjE2MzM4NzQ3fQ.EM9DgM8uDYwrXCQthT1ioQftdx-MQgYEkElciRQsU2o"
// userId: "6057267c2c42420015584d28"
