import bcrypt from "bcrypt";

import { Users, Roles, UserRoles } from "../models";

export const getUsers = async (req, res) => {
  try {
    const results = await Users.findAll();
    res.json(results);
  } catch (error) {
    console.log(error);
  }
};

export const getUserById = async (req, res) => {
  try {
    const results = await Users.findOne({
      include: Roles,
      where: { id: req.params.id },
    });
    res.json(results);
  } catch (error) {
    console.log(error);
  }
};

export const addUser = async (req, res) => {
  // It's possible to add an User with an existing email, fix this!!! Joi?
  const { firstname, lastname, email, password } = req.body;
  let hassPassword = bcrypt.hashSync(password, 10);
  try {
    const results = await Users.create({
      firstname,
      lastname,
      email,
      password: hassPassword,
    });
    res.json({ message: "Successful", data: results });
  } catch (error) {
    res.status(400).json({
      message: "No se pudo añadir el usuario",
    });
  }
};

export const addRoleToUser = async (req, res) => {
  const { userId, roleId } = req.params;
  try {
    const results = await UserRoles.create({ userId, roleId });
    res.json({ message: results });
  } catch (error) {
    console.log(error);
  }
};

export const updateUser = async (req, res) => {
  try {
  } catch (error) {}
};

export const deleteUser = async (req, res) => {
  try {
    await Users.destroy({ where: { id: req.params.id } });
    res.json({ message: "User deleted successfully" });
  } catch (error) {
    console.log(error);
  }
};
