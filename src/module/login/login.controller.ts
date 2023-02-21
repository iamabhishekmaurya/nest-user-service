import { Controller } from '@nestjs/common';
import { Body, Post } from '@nestjs/common/decorators';
import { LoginService } from './login.service';

@Controller('login')
export class LoginController {
    constructor(private LoginService: LoginService) { }

    @Post()
    login(@Body() login: LoginDto){
         
    }
}
