import { DataType } from 'sequelize-typescript'
import { QueryInterface } from 'sequelize'
import { MigrationFn } from 'umzug'

export const up: MigrationFn<QueryInterface> = async ({context: queryInterface}) =>
  queryInterface.createTable(
    'users',
    {
      id: {
        type: DataType.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
      },
      email: {
        type: DataType.STRING,
        allowNull: false,
      },
      password: {
        type: DataType.STRING,
        allowNull: false,
      },
      token: {
        type: DataType.TEXT('medium'),
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
  queryInterface.dropTable('users')
