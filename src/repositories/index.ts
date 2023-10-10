import { AppDataSource } from "../data-source";
import { UserService } from "../service/userService";
import { User } from "../entity/User";

export const userRepository = new UserService (
    AppDataSource.getRepository(User)
);