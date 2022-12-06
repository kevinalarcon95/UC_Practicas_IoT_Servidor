"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.coachesServiceImpl = void 0;
const common_1 = require("@nestjs/common");
let coachesServiceImpl = class coachesServiceImpl {
    constructor() {
        this.coach = [{
                nombre: 'Andres felipe',
                apellido: 'Perez mora',
                edad: 27,
                team: 'Colombia'
            }];
    }
    listar() {
        return this.coach;
    }
    crear(coaches) {
        this.coach.push(coaches);
        return coaches;
    }
    modificar(id, coaches) {
        this.coach[id] = coaches;
        return this.coach[id];
    }
    eliminar(id) {
        const totalcoachesAntes = this.coach.length;
        this.coach = this.coach.filter((val, index) => index != id);
        if (totalcoachesAntes == this.coach.length) {
            return false;
        }
        else {
            return true;
        }
    }
    cambiarEdad(id, edad) {
        this.coach[id].edad = edad;
        return this.coach[id];
    }
};
coachesServiceImpl = __decorate([
    (0, common_1.Injectable)()
], coachesServiceImpl);
exports.coachesServiceImpl = coachesServiceImpl;
//# sourceMappingURL=coachesImpl.service.js.map