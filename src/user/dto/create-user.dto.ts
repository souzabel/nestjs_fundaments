import { IsStrongPassword, IsString, IsEmail} from "class-validator";


export class CreateUserDTO{
    @IsString()
    name: string;

    @IsEmail()
    email: string;

    @IsStrongPassword({
        minLength: 8,
    })
    password: string;
}