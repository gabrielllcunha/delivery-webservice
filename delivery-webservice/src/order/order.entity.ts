import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Customer } from 'src/customer/customer.entity';

@Entity('order')
export class Order {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({ name: 'orderNumber', type: 'varchar'})
    orderNumber: string;

    @Column({ name: 'orderDate', type: 'timestamp'})
    orderDate: Date;

    @Column({ name: 'total', type: 'integer'})
    total: number;

    @ManyToOne(type => Customer, customer => customer.order)
    customer: Customer;
}