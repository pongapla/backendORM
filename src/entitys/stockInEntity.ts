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
import { Warehouse } from "./warehouseEntity";

@Entity()
export class StockIn {
  @PrimaryGeneratedColumn()
  stockIn_id!: number;

  @ManyToOne(() => Product, { eager: true, cascade: true })
  @JoinColumn({ name: "product_id" })
  product!: Product;

  @ManyToOne(() => Warehouse, { eager: true, cascade: true })
  @JoinColumn({ name: "id" })
  warehouse!: Warehouse;

  @Column()
  quantity!: number;

  @Column({ type: "decimal", precision: 10, scale: 2 })
  cost!: number;

  @Column({ type: "timestamp", default: () => "CURRENT_TIMESTAMP" })
  stockin_date!: Date;

  @Column({ type: "text", nullable: true })
  reference_document!: string;

  @Column({ type: "text", nullable: false })
  remark!: string;

  @ManyToOne(() => User, { eager: true, cascade: true })
  @JoinColumn({ name: "user_id" })
  user!: User;

  @CreateDateColumn({ type: "timestamp", default: () => "CURRENT_TIMESTAMP" })
  created_at!: Date;

  // Inspection,Approva,Complete,Cancelled,Pending Delivery,Pending Stock Count,Pending Record
  @Column({ type: "text", default: "Inspection" })
  status!: string;

  @Column({ type: "text", default: "active" })
  isActive!: string;
}
