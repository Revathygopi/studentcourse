"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const usercontroller_1 = require("../controllers/usercontroller");
const router = (0, express_1.Router)();
router.post('/register', usercontroller_1.register);
router.post('/login', usercontroller_1.login);
exports.default = router;
