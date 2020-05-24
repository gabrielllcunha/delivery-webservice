import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Order } from 'src/order/order.entity';

@Entity('customer')
export class Customer {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({ name: 'name', type: 'varchar', length: '80' })
    name: string;

    @Column({ name: 'cpf', type: 'varchar', length: '80' })
    cpf: string;

    @Column({ name: 'address', type: 'varchar', length: '100' })
    address: string;
}