import { Genres } from "../models";

export const getGenres = async (req, res) => {
  try {
    const results = await Genres.findAll();
    res.json(results);
  } catch (error) {
    console.log(error);
  }
};

export const getGenreById = async (req, res) => {
  try {
    const results = await Genres.findOne({
      // Include missing
      where: { id: req.params.id },
    });
    res.json(results);
  } catch (error) {
    console.log(error);
  }
};

export const deleteGenre = async (req, res) => {
  try {
    await Genres.destroy({ where: { id: req.params.id } });
    res.json({ message: "Content deleted successfully" });
  } catch (error) {
    console.log(error);
  }
};
