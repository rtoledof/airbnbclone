<?php

namespace Application\Migrations;

use Doctrine\DBAL\Migrations\AbstractMigration;
use Doctrine\DBAL\Schema\Schema;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
class Version20150726030740 extends AbstractMigration
{
    /**
     * @param Schema $schema
     */
    public function up(Schema $schema)
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->abortIf($this->connection->getDatabasePlatform()->getName() != 'mysql', 'Migration can only be executed safely on \'mysql\'.');

        $this->addSql('ALTER TABLE booking ADD page_id INT NOT NULL');
        $this->addSql('ALTER TABLE booking ADD CONSTRAINT FK_E00CEDDEC4663E4 FOREIGN KEY (page_id) REFERENCES pages (id)');
        $this->addSql('CREATE INDEX IDX_E00CEDDEC4663E4 ON booking (page_id)');
        $this->addSql('ALTER TABLE pages CHANGE date date DATETIME NOT NULL');
    }

    /**
     * @param Schema $schema
     */
    public function down(Schema $schema)
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->abortIf($this->connection->getDatabasePlatform()->getName() != 'mysql', 'Migration can only be executed safely on \'mysql\'.');

        $this->addSql('ALTER TABLE booking DROP FOREIGN KEY FK_E00CEDDEC4663E4');
        $this->addSql('DROP INDEX IDX_E00CEDDEC4663E4 ON booking');
        $this->addSql('ALTER TABLE booking DROP page_id');
        $this->addSql('ALTER TABLE pages CHANGE date date DATETIME NOT NULL');
    }
}
