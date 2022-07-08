"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Test2Service = void 0;
const common_1 = require("@nestjs/common");
let Test2Service = class Test2Service {
    create(createTest2Input) {
        return createTest2Input;
        return 'This action adds a new test2';
    }
    findAll() {
        return [{ exampleField: 1, lastName: "Kieruzel", name: "Marcin" }, { exampleField: 2, lastName: "Kieruzel", name: "Marcin" }];
    }
    findOne(id) {
        return { exampleField: 1, lastName: "Kieruzel", name: "Marcin" };
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
    (0, common_1.Injectable)()
], Test2Service);
exports.Test2Service = Test2Service;
//# sourceMappingURL=test2.service.js.map