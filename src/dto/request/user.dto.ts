import { IsEmail, IsNotEmpty, Length, Matches, Max, MaxLength, Min, MinLength } from "class-validator";
import { ErrorMessage } from "src/common/constant/ErrorMessage";
import { RegexPattern } from "src/common/constant/RegexPattern";

export class BaseDto { }

export class UserDto extends BaseDto {
    @IsNotEmpty()
    @Length(3, 100, { message: ErrorMessage.FIRST_NAME_LENGTH_ERROR_MSG })
    @Matches(RegexPattern.NAME_PATTERN, "", { message: ErrorMessage.FIRST_NAME_PATTERN_ERROR_MSG })
    public firstName: string;
    @IsNotEmpty()
    @Length(3, 100, { message: ErrorMessage.LAST_NAME_LENGTH_ERROR_MSG })
    @Matches(RegexPattern.NAME_PATTERN, "", { message: ErrorMessage.LAST_NAME_PATTERN_ERROR_MSG })
    public lastName: string;
    @IsNotEmpty()
    @IsEmail()
    public email: string;
    @IsNotEmpty()
    @MinLength(8, { message: ErrorMessage.PASSWORD_MIN_CHAR })
    @MaxLength(24, { message: ErrorMessage.PASSWORD_MAX_CHAR })
    // @Matches(RegexPattern.PASSWORD_PATTERN, "", { message: ErrorMessage.PASSWORD_NOT_VALID })
    public password: string;
}