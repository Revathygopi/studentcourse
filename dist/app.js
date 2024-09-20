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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const userroutes_1 = __importDefault(require("./routes/userroutes"));
const courseroutes_1 = __importDefault(require("./routes/courseroutes"));
const config_1 = require("./config/config");
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use('/api', userroutes_1.default);
app.use('/api', courseroutes_1.default);
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => __awaiter(void 0, void 0, void 0, function* () {
    console.log(`Server running on http://localhost:${PORT}`);
    try {
        yield config_1.sequelize.authenticate();
        console.log('Database connection established.');
    }
    catch (error) {
        console.error('Unable to connect to the database:', error);
    }
}));
