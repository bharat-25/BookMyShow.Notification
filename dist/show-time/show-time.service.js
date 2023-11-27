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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ShowTimeService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("mongoose");
const show_time_schema_1 = require("./schema/show-time.schema");
const mongoose_2 = require("@nestjs/mongoose");
const redis_service_1 = require("../auth/redis/redis.service");
let ShowTimeService = class ShowTimeService {
    constructor(showtimeModel, redisService) {
        this.showtimeModel = showtimeModel;
        this.redisService = redisService;
    }
    async addShowtime(showtime) {
        const newShowtime = new this.showtimeModel(showtime);
        return newShowtime.save();
    }
    async updateShowtime(id, showtime) {
        console.log(showtime.date);
        const updatedShowtime = await this.showtimeModel.findByIdAndUpdate(id, { date: showtime.date });
        console.log(updatedShowtime);
        return updatedShowtime;
    }
    async deleteShowtime(id) {
        const deletedShowtime = await this.showtimeModel.findByIdAndRemove(id);
        return deletedShowtime;
    }
    async getShowtimes(movieId, theaterId) {
        const showtimes = await this.showtimeModel.find({ movieId, theaterId }).exec();
        return showtimes;
    }
};
exports.ShowTimeService = ShowTimeService;
exports.ShowTimeService = ShowTimeService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_2.InjectModel)(show_time_schema_1.Showtime.name)),
    __metadata("design:paramtypes", [mongoose_1.Model,
        redis_service_1.RedisService])
], ShowTimeService);
//# sourceMappingURL=show-time.service.js.map