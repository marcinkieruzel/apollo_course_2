"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.dataSourceOptions = void 0;
const typeorm_1 = require("typeorm");
const post_entity_1 = require("./post/entities/post.entity");
const test2_entity_1 = require("./test2/entities/test2.entity");
const user_entity_1 = require("./user/entities/user.entity");
exports.dataSourceOptions = {
    "type": "postgres",
    "host": "localhost",
    "port": 5432,
    "username": "postgres",
    "password": "postgres",
    "database": "nest",
    "logging": false,
    "entities": [test2_entity_1.Test2, post_entity_1.Post, user_entity_1.User],
    "migrationsTableName": "migrations",
    "migrations": ["dist/migration/*.js"],
};
const dataSource = new typeorm_1.DataSource(exports.dataSourceOptions);
exports.default = dataSource;
//# sourceMappingURL=ormconfig.js.map