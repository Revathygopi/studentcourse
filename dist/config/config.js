"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.sequelize = void 0;
const sequelize_1 = require("sequelize");
const DB_USERNAME = 'postgres';
const DB_PASSWORD = '12345678';
const DB_NAME = 'postgres';
const DB_HOST = 'localhost';
const DB_DIALECT = 'postgres';
const sequelize = new sequelize_1.Sequelize(DB_NAME, DB_USERNAME, DB_PASSWORD, {
    host: DB_HOST,
    dialect: DB_DIALECT,
    logging: true
});
exports.sequelize = sequelize;
const syncDatabase = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield sequelize.sync({ force: true });
        console.log('Database & tables created!');
    }
    catch (error) {
        console.error('Error creating database tables:', error);
    }
});
syncDatabase();
