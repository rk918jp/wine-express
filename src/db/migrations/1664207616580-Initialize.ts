import { MigrationInterface, QueryRunner } from "typeorm";

export class Initialize1664207616580 implements MigrationInterface {
    name = 'Initialize1664207616580'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`Wine\` (\`id\` int NOT NULL AUTO_INCREMENT, \`name\` varchar(255) NOT NULL, \`winery\` varchar(255) NOT NULL, \`wineType\` varchar(255) NOT NULL, \`description\` varchar(255) NOT NULL, \`aaa\` varchar(255) NOT NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE \`Wine\``);
    }

}
