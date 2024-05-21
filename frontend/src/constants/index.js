import { setLocale, object, string } from "yup";

import { COPY } from "../copy";

setLocale({
  mixed: {
    required: COPY["errors.requiredField"],
  },
  string: {
    email: COPY["errors.invalidEmail"],
  },
});

export const FORM_SCHEMES = {
  LOGIN: object().shape({
    email: string().email().required(),
    password: string().required(),
  }),
  SIGN_UP: object().shape({
    email: string().email().required(),
    username: string().required(),
    password: string().required(),
    role: string().required(),
  }),
};

export const USER_ROLES = {
  ADMIN: "ADMIN",
  CREATOR: "CREATOR",
  READER: "READER",
};

const API_DOMAIN = "http://localhost:8080";

export const API_URLS = {
  USERS: `${API_DOMAIN}/users`,
  LOGIN: `${API_DOMAIN}/users/login`,
  SIGN_UP: `${API_DOMAIN}/users/sign-up`,
  ME: `${API_DOMAIN}/users/me`,
};

export const QUERY_KEYS = {
  DOES_SESSION_EXIST: "DOES_SESSION_EXIST",
  USERS: "USERS",
};
