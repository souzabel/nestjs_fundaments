import { Controller, Post, Body, Get, Param, Put, Patch, Delete} from "@nestjs/common/decorators";
import { CreateUserDTO } from "./dto/create-user.dto";
import { UpdatePutUserDTO } from "./dto/update-put-user.dto";

@Controller('users')
export class UserController {

    @Post()
    async create(@Body() {name, email, password}: CreateUserDTO) {
        return {name, email, password}
    };
    
    @Get()
    async list(){
        return {users:[]}
    }

    @Get(':id')
    async show(@Param() param){
        return {user: {}, param}
    }

    @Put(':id')
    async update(@Body() {name, email, password}: UpdatePutUserDTO, @Param() params){
        return {
            method: 'put',
            name, email, password,
            params
        }
    }

    @Patch(':id')
    async updatePartial(@Body() body, @Param() params){
        return {
            method: 'put',
            body,
            params
        }
    }

    @Delete(':id')
    async delete(@Param() params){
        return {
            params
        }
    }
}