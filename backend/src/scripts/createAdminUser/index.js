import prompts from "prompts";
import consola from "consola";

import { connectDb, User } from "../../db";
import { USER_ROLES } from "../../constants";

async function createAdminUser() {
  await connectDb();

  const admin = await User.findOne({ role: USER_ROLES.ADMIN });
  if (admin) {
    consola.error("Currently there is already an administrator user");
    process.exit(1);
  }

  const { username, email, password } = await prompts([
    {
      type: "text",
      name: "username",
      message: "Introduzca el nombre de usuario",
    },
    {
      type: "text",
      name: "email",
      message: "Introduzca el correo electronico",
    },
    {
      type: "text",
      name: "password",
      message: "Introduzca una contraseña",
    },
  ]);

  await User.create({
    username,
    email,
    password,
    role: USER_ROLES.ADMIN,
  });

  consola.success("Administrador creado exitosamente");

  process.exit(0);
}

createAdminUser();
