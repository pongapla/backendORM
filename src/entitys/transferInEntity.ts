import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  ManyToOne,
  JoinColumn,
} from "typeorm";
import { Product } from "./productEntity"; // แก้ไปตามชื่อ Entity ของ Product
import { User } from "./userEntity"; // แก้ไปตามชื่อ Entity ของ User
import { Department } from "./departmentEntity";

@Entity()
export class TransferIn {
  @PrimaryGeneratedColumn()
  id!: number;

  @ManyToOne(() => Product, { eager: true, cascade: true })
  @JoinColumn({ name: "id" })
  product!: Product;

  @Column()
  quantity!: number;

  @Column({ type: "timestamp", default: () => "CURRENT_TIMESTAMP" })
  date!: Date;

  @ManyToOne(() => Department, { eager: true, cascade: true })
  @JoinColumn({ name: "department_id" })
  department!: Department;

  @ManyToOne(() => User, { eager: true, cascade: true })
  @JoinColumn({ name: "user_id" })
  user!: User;

  @Column({ type: "text", nullable: true })
  reference_document!: string;

  @Column({ type: "text", nullable: false })
  remark!: string;

  @CreateDateColumn({ type: "timestamp", default: () => "CURRENT_TIMESTAMP" })
  created_at!: Date;
  // Inspection,Approva,Complete,Cancelled,Pending Delivery,Pending Stock Count,Pending Record
  @Column({ type: "text", default: "Inspection" })
  status!: string;

  @Column({ type: "text", default: "active" })
  isActive!: string;
}
