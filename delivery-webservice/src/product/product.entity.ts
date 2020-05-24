import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { OrderItem } from 'src/orderItem/orderItem.entity';

@Entity('product')
export class Product {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({ name: 'code', type: 'varchar' })
    code: string;

    @Column({ name: 'name', type: 'varchar' })
    name: string;

    @Column({ name: 'price', type: 'integer' })
    price: number;

    @Column({ name: 'stockQuantity', type: 'integer' })
    stockQuantity: number;
}