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
};
