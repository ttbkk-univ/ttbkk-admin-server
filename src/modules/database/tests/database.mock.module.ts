import { Global, Module } from '@nestjs/common';
import { databaseTestTypeOrmProvider } from '@src/modules/database/tests/databaseTestTypeOrmProvider';

@Global()
@Module({
  providers: [databaseTestTypeOrmProvider],
  exports: [databaseTestTypeOrmProvider],
})
export class DatabaseMockModule {}
