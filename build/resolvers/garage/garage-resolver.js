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
exports.GarageResolver = void 0;
const type_graphql_1 = require("type-graphql");
const garage_arguments_1 = require("./garage-arguments");
const garage_entity_1 = require("../../entities/garage-entity");
let GarageResolver = class GarageResolver {
    async garages() {
        return await garage_entity_1.GarageModel.find({});
    }
    async garage(_id) {
        return await garage_entity_1.GarageModel.findById(_id);
    }
    async createGarage(data) {
        const newUser = new garage_entity_1.GarageModel(data);
        await newUser.save();
        return newUser;
    }
    async deleteGarage(_id) {
        return await garage_entity_1.GarageModel.findByIdAndRemove(_id);
    }
    async editGarage(_id, data) {
        return await garage_entity_1.GarageModel.findByIdAndUpdate(_id, data, { new: true });
    }
};
__decorate([
    (0, type_graphql_1.Query)(returns => [garage_entity_1.Garage]),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], GarageResolver.prototype, "garages", null);
__decorate([
    (0, type_graphql_1.Query)(returns => garage_entity_1.Garage),
    __param(0, (0, type_graphql_1.Arg)("_id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], GarageResolver.prototype, "garage", null);
__decorate([
    (0, type_graphql_1.Mutation)(returns => garage_entity_1.Garage),
    __param(0, (0, type_graphql_1.Arg)("data")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [garage_arguments_1.BaseGarageInput]),
    __metadata("design:returntype", Promise)
], GarageResolver.prototype, "createGarage", null);
__decorate([
    (0, type_graphql_1.Mutation)(returns => garage_entity_1.Garage),
    __param(0, (0, type_graphql_1.Arg)("_id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], GarageResolver.prototype, "deleteGarage", null);
__decorate([
    (0, type_graphql_1.Mutation)(returns => garage_entity_1.Garage),
    __param(0, (0, type_graphql_1.Arg)("_id")),
    __param(1, (0, type_graphql_1.Arg)("data")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, garage_arguments_1.BaseGarageInput]),
    __metadata("design:returntype", Promise)
], GarageResolver.prototype, "editGarage", null);
GarageResolver = __decorate([
    (0, type_graphql_1.Resolver)()
], GarageResolver);
exports.GarageResolver = GarageResolver;
