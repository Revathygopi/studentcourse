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
exports.login = exports.register = void 0;
const user_1 = require("../models/user");
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const SECRET_KEY = 'revathy';
const register = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { name, email, password, phoneNumber, address, education } = req.body;
    try {
        const user = yield user_1.User.create({ name, email, password, phoneNumber, address, education });
        res.status(201).json({ name: user.name, email: user.email, phonenumber: user.phoneNumber, address: user.address, education: user.education });
    }
    catch (error) {
        res.status(400).json({ error: error });
    }
});
exports.register = register;
const login = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { email, password } = req.body;
    try {
        const user = yield user_1.User.findOne({ where: { email } });
        if (user && (yield user.comparePassword(password))) {
            const token = jsonwebtoken_1.default.sign({ id: user.id, name: user.name }, SECRET_KEY, { expiresIn: '1h' });
            res.json({ token });
        }
        else {
            res.status(401).json({ message: 'Invalid email or password' });
        }
    }
    catch (error) {
        res.status(400).json({ error: error });
    }
});
exports.login = login;
