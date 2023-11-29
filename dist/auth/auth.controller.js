"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthController = void 0;
const common_1 = require("@nestjs/common");
const axios_1 = require("axios");
const redis_service_1 = require("./redis/redis.service");
let AuthController = class AuthController {
    constructor(redisService) {
        this.redisService = redisService;
        this.baseUrl = 'http://localhost:3008';
    }
    async verifyUser(userEmail) {
        try {
            const GetUser = await this.redisService.redisGet(userEmail);
            if (GetUser) {
                return true;
            }
            const Axiosresponse = await axios_1.default.post(`${this.baseUrl}/users/User-Verify`, { userEmail });
            console.log('------->', Axiosresponse.data);
            const Isverify = Axiosresponse.data;
            await this.redisService.redisSet(userEmail, Isverify, 900);
            return Isverify;
        }
        catch (error) {
            console.error('Error in verifyUser:', error.message);
            throw error;
        }
    }
};
exports.AuthController = AuthController;
exports.AuthController = AuthController = __decorate([
    (0, common_1.Controller)('auth'),
    __metadata("design:paramtypes", [redis_service_1.RedisService])
], AuthController);
//# sourceMappingURL=auth.controller.js.map