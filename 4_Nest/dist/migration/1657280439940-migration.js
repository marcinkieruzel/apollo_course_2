"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.migration1657280439940 = void 0;
class migration1657280439940 {
    constructor() {
        this.name = 'migration1657280439940';
    }
    async up(queryRunner) {
        await queryRunner.query(`CREATE TABLE "test2" ("id" SERIAL NOT NULL, "exampleField" integer NOT NULL, "name" character varying NOT NULL, "lastName" character varying NOT NULL, CONSTRAINT "PK_5dd5701efb4ac789df604efefc6" PRIMARY KEY ("id"))`);
    }
    async down(queryRunner) {
        await queryRunner.query(`DROP TABLE "test2"`);
    }
}
exports.migration1657280439940 = migration1657280439940;
//# sourceMappingURL=1657280439940-migration.js.map