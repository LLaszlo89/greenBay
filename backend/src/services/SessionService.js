import jwt from "jsonwebtoken";
import { createError } from "../models/customError";

export class SessionService {
  constructor({ userRepository, passwordValidationService }) {
    this.userRepository = userRepository;
    this.passwordValidationService = passwordValidationService;
  }

  async login({ username, password }) {
    if (!username) { 
      throw createError(401, "Username is missing");
    } else if (!password) {
      throw createError(401, "Password is missing");
    } else {
      const user = await this.userRepository.user(username); // user.results[0]
      if (user.results.length <= 0) {
        throw createError(404, "User not exists");
      } else if (
        password.toString() !== user.results[0].password    // password.toString()  extra ell

        /*         !(await this.passwordValidationService.passwordCheck(
          password,
          user.results[0].password
        )) */
      ) {
        throw createError(401, "Password is incorrect");
      } else {
        const tokenData = {
          user_id: user.results[0].id,
          user_name: user.results[0].name,
        };
        return {
          token: jwt.sign(tokenData, process.env.ACCESS_TOKEN_SECRET),
          /* user: tokenData.user_name, */
        };
      }
    }
  }

  verifyToken(token) {
    return jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);
  }
}
