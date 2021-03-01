import { sign } from "jsonwebtoken";

export const signToken = (payload) => {
  try {
    let token = sign(payload, process.env.SECRET_KEY, {
      algorithm: "HS256",
      expiresIn: "2h",
    });
    return token
  } catch (error) {
      console.log(error);
      throw new Error('There is an error signing the token' )
  }
};
