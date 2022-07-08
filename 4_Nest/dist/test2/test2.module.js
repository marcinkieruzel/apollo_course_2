"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Test2Module = void 0;
const common_1 = require("@nestjs/common");
const test2_service_1 = require("./test2.service");
const test2_resolver_1 = require("./test2.resolver");
let Test2Module = class Test2Module {
};
Test2Module = __decorate([
    (0, common_1.Module)({
        providers: [test2_resolver_1.Test2Resolver, test2_service_1.Test2Service]
    })
], Test2Module);
exports.Test2Module = Test2Module;
//# sourceMappingURL=test2.module.js.map