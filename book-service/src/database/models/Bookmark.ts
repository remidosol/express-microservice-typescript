import {
  Table,
  Model,
  Column,
  DataType,
  Unique,
} from 'sequelize-typescript'

@Table({
  timestamps: true,
  tableName: 'bookmarks',
  charset: 'utf8mb4',
  collate: 'utf8mb4_unicode_ci',
})
export class Bookmark extends Model<Partial<Bookmark>> {
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
    field: 'user_id'
  })
  userId!: number

  @Unique({ name: 'itemId', msg: 'You already added this book to your bookmarks.' })
  @Column({
    type: DataType.STRING,
    allowNull: false,
    field: 'item_id'
  })
  itemId!: string

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  title!: string

  @Column({
    type: DataType.STRING,
    allowNull: true,
  })
  subtitle?: string

  @Column({
    type: DataType.TEXT('medium'),
    allowNull: true,
  })
  description?: string

  @Column({
    type: DataType.INTEGER,
    allowNull: true,
  })
  pageCount?: number

  @Column({
    type: DataType.STRING,
    allowNull: true,
  })
  publisher?: string

  @Column({
    type: DataType.STRING,
    allowNull: true,
  })
  authors?: string

  @Column({
    type: DataType.STRING,
    allowNull: true,
    field: 'published_date'
  })
  publishedDate?: string

  @Column({
    type: DataType.STRING,
    allowNull: true,
  })
  image?: string

  @Column({
    type: DataType.STRING,
    allowNull: true,
  })
  link?: string

  @Column({
    type: DataType.STRING,
    allowNull: true,
  })
  language!: string
}
