import { Users } from "../models";
import bcrypt from "bcrypt";
import { signToken } from "../utils/jwt";

export const logIn = async (req, res) => {
  const { email, password } = req.body;
  try {
    let user = await Users.findOne({ where: { email } });
    if (user) {
      let hassPassword = user.password; // Encrypted pw
      let valid = bcrypt.compareSync(password, hassPassword); // password to be encrypted and compare against hassPassword (encrypted)
      let userObj = {
        id: user.id,
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email,
      };
      if (valid)
        res.status(200).json({
          message: "Login successful",
          token: signToken(userObj),
        });
      else
        res.status(401).json({
          message: "Incorrect password or email",
        });
    } else
      res.status(401).json({
        message: "Incorrect password or email",
      });
  } catch (error) {
    res.status(401).json({
      message: "Incorrect password or email",
      error,
    });
  }
};

export const signUp = async (req, res) => {
  const { firstname, lastname, email, password } = req.body;
  try {
    let hassPassword = bcrypt.hashSync(password, 10);
    let results = await Users.findOrCreate({
      where: { email },
      defaults: { firstname, lastname, email, password: hassPassword },
    });
    if (results[1]) {
      res.status(201).json(results[0]);
    } else {
      res.status(400).json({
        message: "User already exists",
      });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "Register error",
    });
  }
};

export const resetPassword = async (req, res) => {
  try {
  } catch (error) {}
};

export const updatePassword = async (req, res) => {
  try {
  } catch (error) {}
};
