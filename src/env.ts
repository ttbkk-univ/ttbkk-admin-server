interface Env {
  rootDir: string;
  environment: string,
  database: {
    host: 'DATABASE_HOST',
    user: 'DATABASE_USER',
    password: 'DATABASE_PASSWORD',
    db: 'DATABASE_DB',
    port: 'DATABASE_PORT',
  },
}

export const env: Env = {
  rootDir: process.cwd(),
  environment: 'ENVIRONMENT',
  database: {
    host: 'DATABASE_HOST',
    user: 'DATABASE_USER',
    password: 'DATABASE_PASSWORD',
    db: 'DATABASE_DB',
    port: 'DATABASE_PORT',
  },
};
