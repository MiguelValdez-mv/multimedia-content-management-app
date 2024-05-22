import { Thematic, Content } from "../../../db";
import { getImgFromRequest } from "../../../utils";

export async function createThematic(req, res) {
  const { name, contentTypes } = req.body;

  const thematic = await Thematic.create({
    name,
    coverImage: getImgFromRequest(req),
    contentTypes: contentTypes.split(","),
  });

  return res.status(200).send(thematic);
}

export async function getThematics(req, res) {
  const thematics = await Thematic.find();

  return res.status(200).send(thematics);
}

export async function getThematicById(req, res) {
  const { id } = req.params;

  const thematic = await Thematic.findById(id);
  if (!thematic) {
    return res.status(404).send({ message: "Thematic not found" });
  }

  return res.status(200).send(thematic);
}

export async function deleteThematicById(req, res) {
  const { id } = req.params;

  const [thematic] = await Promise.all([
    Thematic.findOneAndDelete({ _id: id }),
    Content.deleteMany({ thematicId: id }),
  ]);

  return res.status(200).send(thematic);
}
