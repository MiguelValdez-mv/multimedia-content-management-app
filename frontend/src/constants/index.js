import { setLocale, object, string, mixed, array } from "yup";

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
  THEMATIC_CREATION: object().shape({
    name: string().required(),
    coverImage: mixed().required(),
    contentTypes: array().of(string()).min(1),
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

  THEMATICS: `${API_DOMAIN}/thematics`,
};

export const QUERY_KEYS = {
  DOES_SESSION_EXIST: "DOES_SESSION_EXIST",
  USERS: "USERS",
  THEMATICS: "THEMATICS",
};

export const CONTENT_TYPES = {
  TEXT: "TEXT",
  IMAGE: "IMAGE",
  VIDEO_URL: "VIDEO_URL",
};
