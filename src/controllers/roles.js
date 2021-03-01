import { Roles, UserRoles } from "../models";

export const getRoles = async (req, res) => {
  try {
    const results = await Roles.findAll();
    res.json({
      message: results,
    });
  } catch (error) {
    console.log(error);
  }
};

export const getRoleById = async (req, res) => {
  try {
    const results = await Roles.findOne({ where: { id: req.params.id } });
    res.json({
      message: results,
    });
  } catch (error) {
    console.log(error);
  }
};

export const addRole = async (req, res) => {
  const data = req.body;
  try {
    const results = await Roles.create(data);
    res.json({ message: results });
  } catch (error) {
    console.log(error);
  }
};

export const updateRole = async (req, res) => {
  try {
  } catch (error) {}
};

export const deleteRole = async (req, res) => {
  try {
    await UserRoles.destroy({
      where: { roleId: req.params.id },
      cascade: true,
    });
    res.json({ message: "Role deleted successfully" });
  } catch (error) {
    console.log(error);
  }
};
