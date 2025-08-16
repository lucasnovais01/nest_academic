import { Controller, Get, HttpCode, HttpStatus } from '@nestjs/common';

@Controller('/cidade')
//PascalCamel
export class CidadeControllerFindAll {
  @HttpCode(HttpStatus.OK) // 200
  @Get('/listar')
  findAll() {
    return 'Listar todas as cidades do banco de dados';
  }
}
