"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.migration1657283856854 = void 0;
class migration1657283856854 {
    constructor() {
        this.name = 'migration1657283856854';
    }
    async up(queryRunner) {
        await queryRunner.query(`CREATE TABLE "user" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, "username" character varying NOT NULL, "email" character varying NOT NULL, CONSTRAINT "PK_cace4a159ff9f2512dd42373760" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "post" ADD "userId" integer`);
        await queryRunner.query(`ALTER TABLE "post" ADD CONSTRAINT "FK_5c1cf55c308037b5aca1038a131" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }
    async down(queryRunner) {
        await queryRunner.query(`ALTER TABLE "post" DROP CONSTRAINT "FK_5c1cf55c308037b5aca1038a131"`);
        await queryRunner.query(`ALTER TABLE "post" DROP COLUMN "userId"`);
        await queryRunner.query(`DROP TABLE "user"`);
    }
}
exports.migration1657283856854 = migration1657283856854;
//# sourceMappingURL=1657283856854-migration.js.map