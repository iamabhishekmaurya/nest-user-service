import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from '../../entity/user.entity';
import { RegisterController } from './register.controller';
import { RegisterService } from './register.service';

@Module({
    imports: [TypeOrmModule.forFeature([User])],
    providers: [RegisterService],
    controllers: [RegisterController],
})
export class RegisterModule {}
