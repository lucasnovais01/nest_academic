import { Module } from '@nestjs/common';
import { CidadeControllerFindAll } from './controllers/cidade.controller.findall';

@Module({
  imports: [],
  controllers: [CidadeControllerFindAll],
  providers: [],
})
export class CidadeModule {}
