import { Directors } from "../models";

export const getDirectors = async (req, res) => {
  try {
    const results = await Directors.findAll();
    res.json(results);
  } catch (error) {
    console.log(error);
  }
};

export const getDirectorById = async (req, res) => {
  try {
    const results = await Directors.findOne({
      // Include missing
      where: { id: req.params.id },
    });
    res.json(results);
  } catch (error) {
    console.log(error);
  }
};

export const deleteDirector = async (req, res) => {
  try {
    await Directors.destroy({ where: { id: req.params.id } });
    res.json({ message: "Content deleted successfully" });
  } catch (error) {
    console.log(error);
  }
};
