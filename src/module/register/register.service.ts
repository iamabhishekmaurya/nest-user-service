import { Injectable, InternalServerErrorException, Logger } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { StatusCode } from "src/common/constant/StatusCode";
import { ResponseDto } from "src/dto/response/response";
import { ObjectMapper } from "src/helper/object.mapper";
import { Util } from "src/utils/util";
import { Repository } from "typeorm";
import { UserDto } from "../../dto/request/user.dto";
import { User } from "../../entity/user.entity";

@Injectable()
export class RegisterService {

    private readonly LOGGER = new Logger(RegisterService.name);
    private objectMapper = new ObjectMapper();

    public constructor(
        @InjectRepository(User)
        private userRepository: Repository<User>
    ) { }

    /**
     * Create new user account with basic details
     * 
     * @param userDto 
     * @returns User
     */
    public async createUser(userDto: UserDto): Promise<ResponseDto> {
        this.LOGGER.log(`Going to create a new user ${JSON.stringify(userDto)}`);
        let response: ResponseDto;
        try {
            const user: User = this.objectMapper.createUserObject(userDto);
            const userDb = await this.userRepository.save(user);
            response = Util.createResponse(StatusCode.US001, userDb);
        } catch (error) {
            this.LOGGER.error(`Failed to create user ${error.message}`);
            throw new InternalServerErrorException(error.message);
        }
        return response;
    }

    /**
     * This method help you to get all list of register users.
     * 
     * @returns List<User>
     */
    public async getAllUsers(): Promise<ResponseDto> {
        this.LOGGER.log(`Getting to get all users list`);
        let response: ResponseDto;
        try {
            const userList = await this.userRepository.find();
            if (userList && userList.length > 0) {
                this.LOGGER.log(`userList size: ${userList.length}`);
                response = Util.createResponse(StatusCode.US002, userList);
            } else {
                response = Util.createResponse(StatusCode.US003, null);
            }
        } catch (error) {
            this.LOGGER.error(`Exception while fetching user list. Error is - ${error.message}`);
            throw new InternalServerErrorException(error.message);
        }
        return response;
    }

    /**
     * This method help you to get user details by user id
     * 
     * @param userId 
     * @returns User
     */
    public async getUserById(userId: number): Promise<ResponseDto> {
        this.LOGGER.log(`Going to get user by id ${userId}`);
        let response: ResponseDto;
        try {
            const user = await this.userRepository.findOne({ where: { id: userId } });
            if (user) {
                response = Util.createResponse(StatusCode.US004, user);
            } else {
                response = Util.createResponse(StatusCode.US005, null);
            }
        } catch (error) {
            this.LOGGER.error(`Exception while fetching user detail by userId: ${userId}. Error is - ${error.message}`);
            throw new InternalServerErrorException(error.message);
        }
        return response;
    }

    updateUser(id: number, user: UserDto) {
        this.LOGGER.log(`Going to update user :: userId: ${id} and user: ${JSON.stringify(user)}`);
        return this.userRepository.findOne({ where: { id } });
        // this.logger.log(`Updated user: ${JSON.stringify(userDb)}`)
        // if (userDb) {
        //     return "user is found";
        // }
        // return "user not found";
    }
}