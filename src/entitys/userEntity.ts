import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

enum IsActive {
  Active = "active",
  Inactive = "inActive",
}
@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({ nullable: false })
  userName!: string;

  @Column({ nullable: false })
  email!: string;

  @Column({ nullable: false })
  password!: string;

  @Column({ nullable: false })
  createdDate!: string;

  @Column({ nullable: true })
  updateDate!: string;

  @Column({ type: "text", default: IsActive.Active })
  isActive!: IsActive;
}
