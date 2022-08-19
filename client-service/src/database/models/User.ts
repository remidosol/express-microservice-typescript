import {
  Table,
  Model,
  Column,
  DataType,
  Unique,
  BeforeCreate,
  BeforeUpdate,
  Is,
} from 'sequelize-typescript'
import { BcryptUtils, emailRegexp } from '../../utils/index'

@Table({
  timestamps: true,
  tableName: 'users',
  charset: 'utf8mb4',
  collate: 'utf8mb4_unicode_ci',
})
export class User extends Model<Partial<User>> {
  @Is('email', (value: string) => {
    if (!value.match(emailRegexp)){
      throw new Error('Please provide a valid email address!')
    }
  })
  @Unique({ name: 'email', msg: 'User already exists.' })
  @Column({
    type: DataType.STRING,
    allowNull: false
  })
  email!: string

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  password!: string

  @Column({
    type: DataType.TEXT('medium'),
    allowNull: true,
  })
  token!: string

  @BeforeUpdate
  @BeforeCreate
  static async hashPassword(user: User) {
    user.password = await BcryptUtils.hashPassword(user.password)
  }
}