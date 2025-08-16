import { Controller, Get, Param } from '@nestjs/common';
@Controller('/cidade')
export class CidadeControllerFindOne {
  @Get('/listar/:id')
  findOne(@Param('id') id: string) {
    return `retorna o registro uma única cidade do banco de dados = ${id} `;
    //não pode ser aspas simples, tem que ser crase no return
  }
}
