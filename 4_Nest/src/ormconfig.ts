import { DataSource, DataSourceOptions } from 'typeorm';
import { Post } from './post/entities/post.entity';
import { Test2 } from './test2/entities/test2.entity';
import { User } from './user/entities/user.entity';


export const dataSourceOptions: DataSourceOptions = {
    "type": "postgres",
    "host": "localhost",
    "port": 5432,
    "username": "postgres",
    "password": "postgres",
    "database": "nest",
    "logging": false,
    "entities": [Test2, Post, User],
    "migrationsTableName": "migrations",
    "migrations": ["dist/migration/*.js"],
    // "subscribers": [BadgeSubscriber, ChallangeSubscriber, OrderSubscriber],
}

const dataSource = new DataSource(dataSourceOptions);

export default dataSource;