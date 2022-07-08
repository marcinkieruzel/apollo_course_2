"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.migration1657282142496 = void 0;
class migration1657282142496 {
    constructor() {
        this.name = 'migration1657282142496';
    }
    async up(queryRunner) {
        await queryRunner.query(`CREATE TABLE "post" ("id" SERIAL NOT NULL, "title" character varying NOT NULL, "body" character varying NOT NULL, CONSTRAINT "PK_be5fda3aac270b134ff9c21cdee" PRIMARY KEY ("id"))`);
    }
    async down(queryRunner) {
        await queryRunner.query(`DROP TABLE "post"`);
    }
}
exports.migration1657282142496 = migration1657282142496;
//# sourceMappingURL=1657282142496-migration.js.map