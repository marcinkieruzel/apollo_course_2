import { MigrationInterface, QueryRunner } from "typeorm";

export class migration1657280439940 implements MigrationInterface {
    name = 'migration1657280439940'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "test2" ("id" SERIAL NOT NULL, "exampleField" integer NOT NULL, "name" character varying NOT NULL, "lastName" character varying NOT NULL, CONSTRAINT "PK_5dd5701efb4ac789df604efefc6" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "test2"`);
    }

}
