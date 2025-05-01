import { Controller, Get } from '@nestjs/common';
import { UsuariosService } from './usuarios.service';

@Controller('usuarios')
export class UsuariosController {
    constructor(private readonly appService: UsuariosService) {}
    @Get("teste")
    getTeste() {
        return this.appService.getTeste();
    }
}
