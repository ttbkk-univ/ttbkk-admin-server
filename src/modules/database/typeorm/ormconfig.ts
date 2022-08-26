import { ConnectionOptions } from 'typeorm';
import { SnakeNamingStrategy } from 'typeorm-naming-strategies';
import { entities } from '@src/modules/database/database.entities';
import { env } from '@src/env';
import dotenv, { DotenvParseOutput } from 'dotenv';
import fs from 'fs';

const envPath: string = `.env${process.env.NODE_ENV === 'test' ? '.test' : ''}`;
const parsed: DotenvParseOutput = dotenv.parse(fs.readFileSync(envPath));
const baseDir: string = __dirname.split(env.rootDir)[1].split('/')[1];
const migrationBaseDir: string = baseDir === 'src' ? 'src' : 'dist/src';
const ext: string = baseDir === 'src' ? 'ts' : 'js';

const connectionOptions: ConnectionOptions = {
  type: 'mysql',
  host: parsed.DATABASE_HOST,
  port: Number(parsed.DATABASE_PORT),
  username: parsed.DATABASE_USER,
  password: parsed.DATABASE_PASSWORD,
  database: parsed.DATABASE_DB,
  synchronize: false,
  dropSchema: false,
  logging: parsed.ENVIRONMENT !== 'production',
  entities: entities,
  migrations: [migrationBaseDir + '/migrations/*.' + ext],
  namingStrategy: new SnakeNamingStrategy(),
  timezone: '+09:00',
};

export default connectionOptions;
