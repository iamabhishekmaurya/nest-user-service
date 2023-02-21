import { Logger } from "@nestjs/common";
import { ResponseDto } from "src/dto/response/response";
import { User } from "src/entity/user.entity";

export class Util {

    public static readonly log = new Logger(Util.name);

    public static createResponse(status: { code: string; message: string; }, data: any): ResponseDto {
        this.log.log(JSON.stringify(status));
        let response = new ResponseDto();
        response.status = status.code;
        response.message = status.message;
        response.data = data;
        return response;
    }

}