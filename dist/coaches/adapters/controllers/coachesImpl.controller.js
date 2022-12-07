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
exports.CoachControllerImpl = void 0;
const common_1 = require("@nestjs/common");
const coaches_entity_1 = require("../../domain/entities/coaches.entity");
const errReturn = (e, message) => {
    return {
        message: message,
        error: e
    };
};
let CoachControllerImpl = class CoachControllerImpl {
    constructor(coachesServices) {
        this.coachesServices = coachesServices;
    }
    listar() {
        try {
            return this.coachesServices.listar;
        }
        catch (e) {
            return errReturn(e, "Error al listar entrenadores");
        }
    }
    crear(datos) {
        try {
            return this.coachesServices.crear(datos);
        }
        catch (e) {
            return errReturn(e, "Error al crear entrenador");
        }
    }
    modificar(datos, id) {
        try {
            return this.coachesServices.modificar(id, datos);
        }
        catch (e) {
            return errReturn(e, "Error al modificar entrenador");
        }
    }
    eliminar(id) {
        try {
            return this.coachesServices.eliminar(id);
        }
        catch (e) {
            return errReturn(e, "Error al eliminar entrenador");
        }
    }
    cambiarEdad(id, edad) {
        try {
            return this.coachesServices.cambiarEdad(id, edad);
        }
        catch (e) {
            return errReturn(e, "Error al modificar edad del entrenador");
        }
    }
};
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], CoachControllerImpl.prototype, "listar", null);
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [coaches_entity_1.CoachEntity]),
    __metadata("design:returntype", void 0)
], CoachControllerImpl.prototype, "crear", null);
__decorate([
    (0, common_1.Put)(":id"),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [coaches_entity_1.CoachEntity, Number]),
    __metadata("design:returntype", void 0)
], CoachControllerImpl.prototype, "modificar", null);
__decorate([
    (0, common_1.Delete)(":id"),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], CoachControllerImpl.prototype, "eliminar", null);
__decorate([
    (0, common_1.Patch)(":id/edad/:edad"),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Param)('edad')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Number]),
    __metadata("design:returntype", void 0)
], CoachControllerImpl.prototype, "cambiarEdad", null);
CoachControllerImpl = __decorate([
    (0, common_1.Controller)(),
    __param(0, (0, common_1.Inject)('coachesService')),
    __metadata("design:paramtypes", [Object])
], CoachControllerImpl);
exports.CoachControllerImpl = CoachControllerImpl;
//# sourceMappingURL=coachesImpl.controller.js.map