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
exports.CarInput = exports.BaseCarInput = void 0;
const class_validator_1 = require("class-validator");
const type_graphql_1 = require("type-graphql");
const mongodb_1 = require("mongodb");
let BaseCarInput = class BaseCarInput {
};
__decorate([
    (0, type_graphql_1.Field)(),
    (0, class_validator_1.MaxLength)(30),
    __metadata("design:type", String)
], BaseCarInput.prototype, "brand", void 0);
__decorate([
    (0, type_graphql_1.Field)(),
    (0, class_validator_1.MaxLength)(30),
    __metadata("design:type", String)
], BaseCarInput.prototype, "model", void 0);
__decorate([
    (0, type_graphql_1.Field)(),
    __metadata("design:type", Number)
], BaseCarInput.prototype, "year", void 0);
BaseCarInput = __decorate([
    (0, type_graphql_1.InputType)()
], BaseCarInput);
exports.BaseCarInput = BaseCarInput;
let CarInput = class CarInput extends BaseCarInput {
};
__decorate([
    (0, type_graphql_1.Field)(),
    __metadata("design:type", mongodb_1.ObjectId)
], CarInput.prototype, "_id", void 0);
CarInput = __decorate([
    (0, type_graphql_1.InputType)()
], CarInput);
exports.CarInput = CarInput;
