import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn }
    from 'typeorm';

@Entity({ name: 'users' })
export class User {
    @PrimaryGeneratedColumn()
    id: number; 

    @Column({ type: 'varchar' })
    username: string; 

    @Column({ type: 'varchar' })
    email: string;

    @Column({ type: 'varchar' })
    password: string;

    @CreateDateColumn({ type: 'timestamp' })
    created_at: Date;
}