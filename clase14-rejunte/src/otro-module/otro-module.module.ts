import { Module } from '@nestjs/common';
import { OtroServiceService } from './otro-service/otro-service.service';

@Module({
  providers: [OtroServiceService]
})
export class OtroModuleModule {}
