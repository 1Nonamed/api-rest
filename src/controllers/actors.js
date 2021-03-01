import { Actors } from "../models";

export const getActors = async (req, res) => {
  try {
    const results = await Actors.findAll();
    res.json(results);
  } catch (error) {
    console.log(error);
  }
};

export const getActorById = async (req, res) => {
  try {
    const results = await Actors.findOne({
      where: { id: req.params.id },
    });
    res.json(results);
  } catch (error) {
    console.log(error);
  }
};

export const deleteActor = async (req, res) => {
  try {
    await Actors.destroy({ where: { id: req.params.id } });
    res.json({ message: "Actor deleted successfully" });
  } catch (error) {
    console.log(error);
  }
};
