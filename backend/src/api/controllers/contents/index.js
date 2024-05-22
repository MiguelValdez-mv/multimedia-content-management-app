import { Content } from "../../../db";

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
