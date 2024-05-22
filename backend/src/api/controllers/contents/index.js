import { Content, User, Thematic } from "../../../db";
import { USER_ROLES, CONTENT_TYPES } from "../../../constants";
import { getImgFromRequest } from "../../../utils";

export async function createContent(req, res) {
  const { userId, body } = req;

  const user = await User.findById(userId);
  if (!user) {
    return res.status(404).send({ message: "User not found" });
  }

  if (user.role === USER_ROLES.READER) {
    return res
      .status(401)
      .send({ message: "The user is not an administrator or creator" });
  }

  const { name, value: valueInput, type, thematicId } = body;

  const thematic = await Thematic.findById(thematicId);
  if (!thematic) {
    return res.status(404).send({ message: "Thematic not found" });
  }

  if (!thematic.contentTypes.includes(type)) {
    return res
      .status(400)
      .send({ message: `This theme does not support the ${type} type` });
  }

  const content = await Content.create({
    name,
    value: type === CONTENT_TYPES.IMAGE ? getImgFromRequest(req) : valueInput,
    type,
    thematicId,
    createdByUserId: userId,
  });

  return res.status(200).send(content);
}

export async function getContents(req, res) {
  const contents = await Content.find();

  return res.status(200).send(contents);
}

// TODO
export async function updateContentById() {}

export async function getContentById(req, res) {
  const { id } = req.params;

  const content = await Content.findById(id);
  if (!content) {
    return res.status(404).send({ message: "Content not found" });
  }

  return res.status(200).send(content);
}

export async function deleteContentById(req, res) {
  const { id } = req.params;

  const content = await Content.findOneAndDelete({ _id: id });

  return res.status(200).send(content);
}
