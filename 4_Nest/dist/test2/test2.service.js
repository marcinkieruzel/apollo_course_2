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
exports.Test2Service = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const test2_entity_1 = require("./entities/test2.entity");
let Test2Service = class Test2Service {
    constructor(test2Repository) {
        this.test2Repository = test2Repository;
    }
    async create(createTest2Input) {
        try {
            return await this.test2Repository.save(createTest2Input);
        }
        catch (error) {
            throw new common_1.HttpException("Nie można dodać testu", common_1.HttpStatus.BAD_REQUEST);
        }
    }
    async findAll() {
        try {
            return await this.test2Repository.find();
        }
        catch (error) {
            throw new common_1.HttpException("Nie można dodać testów", common_1.HttpStatus.BAD_REQUEST);
        }
    }
    findOne(id) {
        return { exampleField: 1, lastName: "Kieruzel", name: "Marcin", id: 1 };
    }
    update(id, updateTest2Input) {
        return { name: "sadasda", lastName: "sadasd", id: 12, exampleField: 1 };
        return `This action updates a #${id} test2`;
    }
    remove(id) {
        return `This action removes a #${id} test2`;
    }
};
Test2Service = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(test2_entity_1.Test2)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], Test2Service);
exports.Test2Service = Test2Service;
//# sourceMappingURL=test2.service.js.map