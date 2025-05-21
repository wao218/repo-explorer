import { Global, Module, OnModuleInit } from '@nestjs/common';
import { PrismaService } from './prisma.service';
import { PrismaClient } from '../../generated/prisma';

@Global()
@Module({
  providers: [PrismaService],
  exports: [PrismaService],
})
export class PrismaModule extends PrismaClient implements OnModuleInit {
  async onModuleInit() {
    await this.$connect();
  }
}
