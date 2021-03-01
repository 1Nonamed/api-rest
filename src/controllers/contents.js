import { Contents } from "../models";

export const getContents = async (req, res) => {
  try {
    const results = await Contents.findAll();
    res.json(results);
  } catch (error) {
    console.log(error);
  }
};

export const getContentById = async (req, res) => {
  try {
    const results = await Contents.findOne({
      // Include missing
      where: { id: req.params.id },
    });
    res.json(results);
  } catch (error) {
    console.log(error);
  }
};

export const deleteContent = async (req, res) => {
  try {
    await Contents.destroy({ where: { id: req.params.id } });
    res.json({ message: "Content deleted successfully" });
  } catch (error) {
    console.log(error);
  }
};
