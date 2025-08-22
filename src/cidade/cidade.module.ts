import { Module } from '@nestjs/common';
import { CidadeControllerFindAll } from './controllers/cidade.controller.findall';
import { CidadeControllerFindOne } from './controllers/cidade.controller.findone';
import { CidadeControllerCreate } from './controllers/cidade.controller.create';
import { CidadeControllerUpdate } from './controllers/cidade.controller.update';

const cidadeControllers = [
  CidadeControllerFindAll,
  CidadeControllerFindOne,
  CidadeControllerCreate,
  CidadeControllerUpdate,
];

@Module({
  imports: [],
  controllers: [
    /*
    CidadeControllerFindAll,
    CidadeControllerFindOne,
    CidadeControllerCreate,
    CidadeControllerUpdate,
    */
    ...cidadeControllers, //Este é um floreio pra deixar o código mais bonito, pega o array acima
  ],
  providers: [],
})
export class CidadeModule {}
