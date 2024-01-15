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
export class StockOut {
  @PrimaryGeneratedColumn()
  stockOut_id!: number;

  @ManyToOne(() => Product, { eager: true, cascade: true })
  @JoinColumn({ name: "product_id" })
  product!: Product;

  @Column()
  quantity!: number;

  @Column({ type: "decimal", precision: 10, scale: 2 })
  selling_price!: number;

  @Column({ type: "timestamp", default: () => "CURRENT_TIMESTAMP" })
  stockout_date!: Date;

  @Column({ type: "text", nullable: true })
  reference_document!: string;

  @ManyToOne(() => User, { eager: true, cascade: true })
  @JoinColumn({ name: "user_id" })
  user!: User;

  @CreateDateColumn({ type: "timestamp", default: () => "CURRENT_TIMESTAMP" })
  created_at!: Date;
}
