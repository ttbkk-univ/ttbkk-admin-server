import { SnakeNamingStrategy } from 'typeorm-naming-strategies';
import { entities } from '@src/modules/database/database.entities';
import { Provider } from '@nestjs/common';
import { Connection } from 'typeorm/connection/Connection';
import { createConnection } from 'typeorm';
import { ConnectionOptions } from 'typeorm/connection/ConnectionOptions';
import { DATABASE_CONNECTION } from '@src/modules/database/database.constants';
import dotenv from 'dotenv';

dotenv.config({ path: '.env.test' });

const mockConnectionOptions: ConnectionOptions = {
  type: 'mysql',
  host: process.env.DATABASE_HOST,
  port: Number(process.env.DATABASE_PORT),
  username: process.env.DATABASE_USER,
  password: process.env.DATABASE_PASSWORD,
  database: process.env.DATABASE_DB,
  synchronize: false,
  dropSchema: false,
  logging: process.env.ENVIRONMENT !== 'production' && process.env.CI !== 'true',
  entities: entities,
  namingStrategy: new SnakeNamingStrategy(),
  timezone: '+09:00',
};

export const databaseTestTypeOrmProvider: Provider = {
  provide: DATABASE_CONNECTION,
  useFactory: async (): Promise<Connection> => await createConnection(mockConnectionOptions),
};
