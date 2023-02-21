import { IsNumber } from "class-validator";
import { BaseDto } from "./base.dto";

export class UserByPhone extends BaseDto{
    @IsNumber()
    public phoneNumber: number;
}