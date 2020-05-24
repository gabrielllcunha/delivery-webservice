import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Product } from 'src/product/product.entity';
import { Order } from 'src/order/order.entity';

@Entity('orderItem')
export class OrderItem {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({ name: 'quantity', type: 'integer' })
    quantity: number;

    @Column({ name: 'unitValue', type: 'integer'})
    unitValue: number;

    @Column({ name: 'totalValue', type: 'integer'})
    totalValue: number;

    @ManyToOne(type => Order, order => order.orderItem)
    order: Order;

    @ManyToOne(type => Product, product => product.orderItem)
    product: Product;
}