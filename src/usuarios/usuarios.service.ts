import { Injectable } from '@nestjs/common';

@Injectable()
export class UsuariosService {
    getTeste() {
        return {
            teste: "ola",
        }
    }
}
