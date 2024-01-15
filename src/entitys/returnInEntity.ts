// return-in.entity.ts
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinColumn,
} from "typeorm";
import { Product } from "./productEntity";

@Entity()
export class ReturnIn {
  @PrimaryGeneratedColumn()
  return_id!: number;

  @ManyToOne(() => Product, { nullable: false })
  @JoinColumn({ name: "product_id" })
  product!: Product;

  @Column({ type: "int", nullable: false })
  quantity!: number;

  @Column({ type: "text", nullable: true })
  reference_document!: string;

  @Column({ type: "text", nullable: false })
  remark!: string;

  @Column({ type: "timestamp", default: () => "CURRENT_TIMESTAMP" })
  return_date!: Date;

  // Inspection,Approva,Complete,Cancelled,Pending Delivery,Pending Stock Count,Pending Record
  @Column({ type: "text", default: "Inspection" })
  status!: string;

  @Column({ type: "text", default: "active" })
  isActive!: string;
}
