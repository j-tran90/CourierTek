"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
exports.default = router;
const index_1 = require("../Controller/index");
router.get('/', index_1.DisplayHomePage);
router.get('/feature', index_1.DisplayFeaturePage);
router.get('/price', index_1.DisplayPricePage);
router.get('/contact', index_1.DisplayContactPage);
router.get('/privacy', index_1.DisplayPrivacyPage);
module.exports = router;
//# sourceMappingURL=index.js.map