import { Controller, Get } from '@nestjs/common';

@Controller('/cidade')
//PascalCamel
export class CidadeControllerFindAll {
  @Get('/listar')
  findAll() {
    return 'Listar todas as cidades do banco de dados';
  }
}
