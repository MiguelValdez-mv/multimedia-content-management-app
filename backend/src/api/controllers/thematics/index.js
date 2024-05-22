import { Thematic } from "../../../db";
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
