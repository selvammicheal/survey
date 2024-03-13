"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Config = void 0;
const typeorm_1 = require("typeorm");
const user_entity_1 = require("./user/entities/user.entity");
exports.Config = {
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: 'root123',
    database: 'survey_app',
    entities: [user_entity_1.User],
    synchronize: true,
};
const dataSource = new typeorm_1.DataSource(exports.Config);
exports.default = dataSource;
//# sourceMappingURL=data-source.js.map