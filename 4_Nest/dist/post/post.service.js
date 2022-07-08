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
exports.PostService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const post_entity_1 = require("./entities/post.entity");
let PostService = class PostService {
    constructor(postRepository, dataSource) {
        this.postRepository = postRepository;
        this.dataSource = dataSource;
    }
    async create(createPostInput) {
        try {
            return await this.postRepository.save(createPostInput);
        }
        catch (error) {
            throw new common_1.HttpException("Błąd dodawania posta", common_1.HttpStatus.BAD_REQUEST);
        }
    }
    async findAll() {
        try {
            return await this.postRepository.find();
        }
        catch (error) {
            throw new common_1.HttpException("Błąd dodawania posta", common_1.HttpStatus.BAD_REQUEST);
        }
    }
    async findOne(id) {
        try {
            return await this.postRepository.findBy({ id: id });
        }
        catch (error) {
            throw new common_1.HttpException("Błąd dodawania posta", common_1.HttpStatus.BAD_REQUEST);
        }
    }
    async update(id, updatePostInput) {
        try {
            const updated = await this.dataSource.getRepository(post_entity_1.Post)
                .createQueryBuilder()
                .update(updatePostInput)
                .where("id = :id", { id: id })
                .returning('*')
                .execute();
            console.log(updated);
            return updated.raw[0];
        }
        catch (error) {
            throw new common_1.HttpException("Błąd dodawania posta", common_1.HttpStatus.BAD_REQUEST);
        }
    }
    async remove(id) {
        try {
            const deleted = await this.postRepository.delete(id);
            console.log(deleted);
            if (!deleted.affected) {
                throw new Error("Post nie istnieje");
            }
            return id;
        }
        catch (error) {
            throw new common_1.HttpException("Błąd dodawania posta", common_1.HttpStatus.BAD_REQUEST);
        }
    }
};
PostService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(post_entity_1.Post)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.DataSource])
], PostService);
exports.PostService = PostService;
//# sourceMappingURL=post.service.js.map