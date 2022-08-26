import { createConnection } from 'typeorm';
import { ConfigService } from '@nestjs/config';
import { Provider } from '@nestjs/common';
import { Connection } from 'typeorm/connection/Connection';
import connectionOptions from '@src/modules/database/typeorm/ormconfig';
import { DATABASE_CONNECTION } from '@src/modules/database/database.constants';

export const databaseProviders: Provider[] = [
  {
    provide: DATABASE_CONNECTION,
    inject: [ConfigService],
    useFactory: async (): Promise<Connection> => await createConnection(connectionOptions),
  },
];
