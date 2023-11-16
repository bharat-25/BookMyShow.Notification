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
exports.TicketBookingService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("mongoose");
const mongoose_2 = require("@nestjs/mongoose");
const booking_schema_1 = require("./schema/booking.schema");
const showtime_schema_1 = require("../../../BookMyShow.Movie/src/show-time/schema/showtime.schema");
let TicketBookingService = class TicketBookingService {
    constructor(ticketbookingModel, showtimeModel) {
        this.ticketbookingModel = ticketbookingModel;
        this.showtimeModel = showtimeModel;
    }
    async bookMovieTicket(bookingDto) {
    }
    async getAllBookings() {
        return this.ticketbookingModel.find().exec();
    }
    async getBookingById(bookingId) {
        return this.ticketbookingModel.findById(bookingId).exec();
    }
    async updateBookingStatus(bookingId, status) {
        return this.ticketbookingModel.findByIdAndUpdate(bookingId, { $set: { status } }, { new: true }).exec();
    }
    async deleteBooking(bookingId) {
        return this.ticketbookingModel.findByIdAndDelete(bookingId).exec();
    }
};
exports.TicketBookingService = TicketBookingService;
exports.TicketBookingService = TicketBookingService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_2.InjectModel)(booking_schema_1.ticketBooking.name)),
    __param(1, (0, mongoose_2.InjectModel)(showtime_schema_1.Showtime.name)),
    __metadata("design:paramtypes", [mongoose_1.Model,
        mongoose_1.Model])
], TicketBookingService);
//# sourceMappingURL=ticket-booking.service.js.map