import { Content } from "../../../db";

// TODO
export async function createContent(req, res) {}

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
