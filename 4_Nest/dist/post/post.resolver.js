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
exports.PostResolver = void 0;
const graphql_1 = require("@nestjs/graphql");
const post_service_1 = require("./post.service");
const post_entity_1 = require("./entities/post.entity");
const create_post_input_1 = require("./dto/create-post.input");
const update_post_input_1 = require("./dto/update-post.input");
let PostResolver = class PostResolver {
    constructor(postService) {
        this.postService = postService;
    }
    createPost(createPostInput) {
        return this.postService.create(createPostInput);
    }
    findAll() {
        return this.postService.findAll();
    }
    findOne(id) {
        return this.postService.findOne(id);
    }
    updatePost(updatePostInput) {
        return this.postService.update(updatePostInput.id, updatePostInput);
    }
    removePost(id) {
        return this.postService.remove(id);
    }
};
__decorate([
    (0, graphql_1.Mutation)(() => post_entity_1.Post),
    __param(0, (0, graphql_1.Args)('createPostInput')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_post_input_1.CreatePostInput]),
    __metadata("design:returntype", void 0)
], PostResolver.prototype, "createPost", null);
__decorate([
    (0, graphql_1.Query)(() => [post_entity_1.Post], { name: 'post' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], PostResolver.prototype, "findAll", null);
__decorate([
    (0, graphql_1.Query)(() => post_entity_1.Post, { name: 'post' }),
    __param(0, (0, graphql_1.Args)('id', { type: () => graphql_1.Int })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], PostResolver.prototype, "findOne", null);
__decorate([
    (0, graphql_1.Mutation)(() => post_entity_1.Post),
    __param(0, (0, graphql_1.Args)('updatePostInput')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [update_post_input_1.UpdatePostInput]),
    __metadata("design:returntype", void 0)
], PostResolver.prototype, "updatePost", null);
__decorate([
    (0, graphql_1.Mutation)(() => graphql_1.ID),
    __param(0, (0, graphql_1.Args)('id', { type: () => graphql_1.Int })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], PostResolver.prototype, "removePost", null);
PostResolver = __decorate([
    (0, graphql_1.Resolver)(() => post_entity_1.Post),
    __metadata("design:paramtypes", [post_service_1.PostService])
], PostResolver);
exports.PostResolver = PostResolver;
//# sourceMappingURL=post.resolver.js.map