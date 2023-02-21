import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { LoginModule } from './module/login/login.module';
import { RegisterModule } from './module/register/register.module';
import { devDbConfig } from './common/config/db/db.config'
import { Util } from './utils/util';
import { AuthModule } from './auth/auth.module';

@Module({
  controllers: [AppController],
  providers: [Util],
  imports: [TypeOrmModule.forRoot(devDbConfig), LoginModule, RegisterModule, AuthModule],
})
export class AppModule { }
