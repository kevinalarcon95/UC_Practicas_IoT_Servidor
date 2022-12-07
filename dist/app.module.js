"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const coachesImpl_controller_1 = require("./coaches/adapters/controllers/coachesImpl.controller");
const coachesImpl_service_1 = require("./coaches/domain/services/coachesImpl.service");
const auth_module_1 = require("./auth/auth.module");
const users_module_1 = require("./users/users.module");
const typeorm_1 = require("@nestjs/typeorm");
const coaches_entity_1 = require("./coaches/domain/entities/coaches.entity");
let AppModule = class AppModule {
};
AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            auth_module_1.AuthModule,
            users_module_1.UsersModule,
            typeorm_1.TypeOrmModule.forRoot({
                type: 'mongodb',
                url: 'mongodb+srv://user:user@cluster0.v6v7z2l.mongodb.net/?retryWrites=true&w=majority',
                useNewUrlParser: true,
                useUnifiedTopology: true,
                synchronize: true,
                logging: true,
                autoLoadEntities: true,
                ssl: true,
            }),
            typeorm_1.TypeOrmModule.forFeature([coaches_entity_1.CoachEntity]),
            users_module_1.UsersModule,
        ],
        controllers: [coachesImpl_controller_1.CoachControllerImpl],
        providers: [
            {
                provide: 'TabletService',
                useClass: coachesImpl_service_1.coachesServiceImpl,
            },
        ],
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map