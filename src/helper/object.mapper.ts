import { UserDto } from "src/dto/request/user.dto";
import { User } from "src/entity/user.entity";

export class ObjectMapper {
    public createUserObject(userDto: UserDto): User {
        const user = new User();
        user.email = userDto.email;
        user.firstName = userDto.firstName;
        user.lastName = userDto.lastName;
        user.password = userDto.password;
        user.createdAt = Date.now();
        user.updatedAt = Date.now();
        return user;
    }
}