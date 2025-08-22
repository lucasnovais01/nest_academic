import { Body, Controller, HttpCode, HttpStatus, Post } from '@nestjs/common';
import { CidadeRequest } from '../dto/request/cidade.request';
import { ConverterCidade } from '../dto/converter/cidade.converter';

@Controller('/cidade')
export class CidadeControllerCreate {
  @HttpCode(HttpStatus.CREATED) // 201
  @Post('/criar')
  create(@Body() cidadeRequest: CidadeRequest) {
    // o método POST é usado para criar novos recursos
    const cidade = ConverterCidade.toCidade(cidadeRequest);
    const cidadeResponse = ConverterCidade.toCidadeResponse(cidade);
    return cidadeResponse;
    //return cidadeRequest; // Retorna o objeto recebido no corpo da requisição
  }
}
