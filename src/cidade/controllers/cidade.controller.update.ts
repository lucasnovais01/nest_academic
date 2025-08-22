import {
  Body,
  Controller,
  HttpCode,
  HttpStatus,
  Param,
  Put,
} from '@nestjs/common';
import { CidadeRequest } from '../dto/request/cidade.request';
import { ConverterCidade } from '../dto/converter/cidade.converter';

@Controller('/cidade')
export class CidadeControllerUpdate {
  @HttpCode(HttpStatus.OK)
  @Put('/alterar/:id')
  // o método PUT envia o objeto a ser persistido, a ser modificado
  update(@Param('id') id: string, @Body() cidadeRequest: CidadeRequest) {
    console.log('recebendo o id ' + id);
    const cidade = ConverterCidade.toCidade(cidadeRequest);
    const cidadeResponse = ConverterCidade.toCidadeResponse(cidade);
    return cidadeResponse;
  }
}
