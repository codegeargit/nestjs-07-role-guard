import { TypeOrmModuleOptions } from "@nestjs/typeorm";


function ormConfig(): TypeOrmModuleOptions {
    const commonConf = {
      SYNCRONIZE: false,
      ENTITIES: [__dirname + '/domain/*.entity{.ts,.js}'],
      MIGRATIONS: [__dirname + '/migrations/**/*{.ts,.js}'],
      CLI: {
          migrationsDir: 'src/migrations',
      },
      MIGRATIONS_RUN: false,
    };

    const ormconfig: TypeOrmModuleOptions = {
        type: 'mysql',
        host: 'localhost',
        port: 13306,
        username: 'root',
        password: 'root',
        database: 'test',
        entities: commonConf.ENTITIES,
        synchronize: commonConf.SYNCRONIZE,
        logging: true,
        migrations: commonConf.MIGRATIONS,
        cli: commonConf.CLI,
        migrationsRun: commonConf.MIGRATIONS_RUN,
    }

    return ormconfig;
}

export { ormConfig }