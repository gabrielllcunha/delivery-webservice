import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Order } from './order.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class OrderService {

    constructor(
        @InjectRepository(Order)
        private readonly repository: Repository<Order>) {
    }

    save(order: Order) {
        return this.repository.save(order);
    }

    delete(id: number) {
        return this.repository.delete(id);
    }

    findAll() {
        return this.repository.find();
    }

    findById(id: number) {
        return this.repository.findOne(id);
    }
}
