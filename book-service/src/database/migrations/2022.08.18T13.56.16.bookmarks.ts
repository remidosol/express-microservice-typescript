import { DataType } from 'sequelize-typescript'
import { QueryInterface } from 'sequelize'
import { MigrationFn } from 'umzug'

export const up: MigrationFn<QueryInterface> = async ({ context: queryInterface }) =>
  queryInterface.createTable(
    'bookmarks',
    {
      id: {
        type: DataType.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
      },
      user_id: {
        type: DataType.INTEGER,
        allowNull: false,
      },
      item_id: {
        type: DataType.STRING,
        allowNull: false,
        unique: true,
      },
      title: {
        type: DataType.STRING,
        allowNull: false,
      },
      subtitle: {
        type: DataType.STRING,
        allowNull: true,
      },
      description: {
        type: DataType.TEXT('medium'),
        allowNull: true,
      },
      pageCount: {
        type: DataType.INTEGER,
        allowNull: true,
      },
      publisher: {
        type: DataType.STRING,
        allowNull: true,
      },
      authors: {
        type: DataType.STRING,
        allowNull: true,
      },
      published_date: {
        type: DataType.STRING,
        allowNull: true,
      },
      image: {
        type: DataType.STRING,
        allowNull: true,
      },
      link: {
        type: DataType.STRING,
        allowNull: true,
      },
      language: {
        type: DataType.STRING,
        allowNull: true,
      },
      createdAt: {
        type: DataType.DATE,
        allowNull: false,
      },
      updatedAt: {
        type: DataType.DATE,
        allowNull: false,
      },
    },
    {
      charset: 'utf8mb4',
      collate: 'utf8mb4_unicode_ci',
    }
  )

export const down: MigrationFn<QueryInterface> = async ({ context: queryInterface }) =>
  queryInterface.dropTable('bookmarks')
