import { Body, Controller, Get, Param, ParseIntPipe, Post, Put } from '@nestjs/common';
import { UserDto } from '../../dto/request/user.dto';
import { RegisterService } from './register.service';

@Controller('register')
export class RegisterController {

    constructor(private registerService: RegisterService) { }

    @Post()
    public register(@Body() user: UserDto) {
        return this.registerService.createUser(user);
    }

    @Post()
    public registerByPhoneNumber(@Body() user: UserDto) {
        return this.registerService.createUser(user);
    }

    @Get()
    public getAllUsers() {
        return this.registerService.getAllUsers();
    }

    @Get("/:userId")
    public getUserById(@Param("userId", ParseIntPipe) userId: number) {
        return this.registerService.getUserById(userId);
    }

    @Put("/:userId")
    public updateUsers(@Param("userId", ParseIntPipe) userId: number, @Body() user: UserDto) {
        return this.registerService.updateUser(userId, user);
    }
}
