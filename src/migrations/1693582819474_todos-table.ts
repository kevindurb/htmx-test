import { ColumnDefinitions, MigrationBuilder } from 'node-pg-migrate';

export const shorthands: ColumnDefinitions | undefined = undefined;

export async function up(pgm: MigrationBuilder): Promise<void> {
  pgm.createTable('todos', {
    id: 'id',
    done: { type: 'boolean', notNull: true, default: false },
    summary: { type: 'text', notNull: true, default: '' },
  });
}

export async function down(pgm: MigrationBuilder): Promise<void> {
  pgm.dropTable('todos');
}
