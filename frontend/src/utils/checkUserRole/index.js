import { USER_ROLES } from "../../constants";

export function isAdminUser(user) {
  return user.role === USER_ROLES.ADMIN;
}

export function isReaderUser(user) {
  return user.role === USER_ROLES.READER;
}
