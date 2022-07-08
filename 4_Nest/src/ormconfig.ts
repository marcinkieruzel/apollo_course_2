import { DataSource, DataSourceOptions } from 'typeorm';


export const dataSourceOptions: DataSourceOptions = {
    "type": "postgres",
    "host": "localhost",
    "port": 5432,
    "username": "postgres",
    "password": "postgres",
    "database": "nest",
    "logging": false,
    "entities": [],
    "migrationsTableName": "migrations",
    "migrations": ["dist/migration/*.js"],
    // "subscribers": [BadgeSubscriber, ChallangeSubscriber, OrderSubscriber],
}

const dataSource = new DataSource(dataSourceOptions);

export default dataSource;