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
      const user = await this.userRepository.user(username);
      if (user.results.length <= 0) {
        throw createError(404, "User not exists");
      } else if (!(await this.passwordValidationService.passwordCheck( password,  user.results[0].password))) {
        throw createError(401, "Password is incorrect");
      } else {
        const tokenData = {
          user_id: user.results[0].id,
          user_name: user.results[0].name,
        };
        return {
          token: jwt.sign(tokenData, process.env.ACCESS_TOKEN_SECRET),
        };
      }
    }
  }

  verifyToken(token) {
    return jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);
  }
}
