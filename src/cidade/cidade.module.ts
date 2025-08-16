import { Module } from '@nestjs/common';
import { CidadeControllerFindAll } from './controllers/cidade.controller.findall';
import { CidadeControllerFindOne } from './controllers/cidade.controller.findone';
import { CidadeControllerCreate } from './controllers/cidade.controller.create';

@Module({
  imports: [],
  controllers: [
    CidadeControllerFindAll,
    CidadeControllerFindOne,
    CidadeControllerCreate,
  ],
  providers: [],
})
export class CidadeModule {}
