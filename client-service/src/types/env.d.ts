// Generated using https://www.npmjs.com/package/dotenv-types

declare namespace NodeJS {
  export interface ProcessEnv {
    HOST: string;
    PORT: string;
    NODE_ENV: 'development' | 'production'
    DEBUG: boolean
    DB_CONNECTION: 'mysql' | 'postgres' | 'sqlite' | 'mariadb' | 'mssql' | 'db2' | 'snowflake';
    DEV_MYSQL_HOST: string;
    DEV_MYSQL_PORT: string;
    DEV_MYSQL_USERNAME: string;
    DEV_MYSQL_PASSWORD: string;
    DEV_MYSQL_SCHEMA: string;
    PROD_MYSQL_HOST: string;
    PROD_MYSQL_PORT: string;
    PROD_MYSQL_USERNAME: string;
    PROD_MYSQL_PASSWORD: string;
    PROD_MYSQL_SCHEMA: string;
  }
}
