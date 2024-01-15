import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
} from "typeorm";

@Entity()
export class Product {
  @PrimaryGeneratedColumn()
  product_id!: number;

  @Column({ type: "int", nullable: false })
  category_id!: number;

  @Column({ type: "varchar", length: 255, nullable: false })
  name!: string;

  @Column({ type: "decimal", precision: 10, scale: 2, nullable: false })
  price!: number;

  @Column({ type: "varchar", length: 255, nullable: false })
  picture!: string;

  @Column({ type: "text", nullable: false })
  description!: string;

  @Column({ type: "int", nullable: false })
  stock_quantity!: number;

  @CreateDateColumn({ type: "timestamp", default: () => "CURRENT_TIMESTAMP" })
  created_at!: Date;

  @UpdateDateColumn({ type: "timestamp", default: () => "CURRENT_TIMESTAMP" })
  updated_at!: Date;

  @Column({ type: "text", default: "active" })
  isActive!: string;
}
