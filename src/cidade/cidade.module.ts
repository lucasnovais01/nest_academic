import { Module } from '@nestjs/common';
import { CidadeControllerFindAll } from './controllers/cidade.controller.findall';
import { CidadeControllerFindOne } from './controllers/cidade.controller.findone';

@Module({
  imports: [],
  controllers: [CidadeControllerFindAll, CidadeControllerFindOne],
  providers: [],
})
export class CidadeModule {}
