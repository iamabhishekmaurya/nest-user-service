import { BeforeInsert, Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import * as bcrypt from "bcrypt";

@Entity('user')
export class User {
    @PrimaryGeneratedColumn()
    id: number;
    @Column({ name: "first_name", length: 50 })
    firstName: string;
    @Column({ name: "last_name", length: 50 })
    lastName: string;
    @Column({ name: "email", length: 50 })
    email: string;
    @Column({ name: "phone", length: 15, nullable: true, unique: true })
    phone: string;
    @Column({ name: "password", unique: true, nullable: true })
    password: string;
    @Column({ name: "created_at", type: "bigint", nullable: true })
    createdAt: number;
    @Column({ name: "updated_at", type: "bigint", nullable: true })
    updatedAt: number;

    @BeforeInsert()
    async setPasswords(password: string) {
        const salt = await bcrypt.genSalt();
        this.password = await bcrypt.hash(password || this.password, salt);
    }
}