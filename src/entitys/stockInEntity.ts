import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  ManyToOne,
  JoinColumn,
} from "typeorm";
import { Product } from "./productEntity";
import { User } from "./userEntity";

@Entity()
export class StockIn {
  @PrimaryGeneratedColumn()
  stockIn_id!: number;

  @ManyToOne(() => Product, { eager: true, cascade: true })
  @JoinColumn({ name: "product_id" })
  product!: Product;

  @Column()
  quantity!: number;

  @Column({ type: "decimal", precision: 10, scale: 2 })
  cost!: number;

  @Column({ type: "timestamp", default: () => "CURRENT_TIMESTAMP" })
  stockin_date!: Date;

  @Column({ type: "text", nullable: true })
  reference_document!: string;

  @ManyToOne(() => User, { eager: true, cascade: true })
  @JoinColumn({ name: "user_id" })
  user!: User;

  @CreateDateColumn({ type: "timestamp", default: () => "CURRENT_TIMESTAMP" })
  created_at!: Date;
}
