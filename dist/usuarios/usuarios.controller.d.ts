import { UsuariosService } from './usuarios.service';
export declare class UsuariosController {
    private readonly appService;
    constructor(appService: UsuariosService);
    getTeste(): {
        teste: string;
    };
}
