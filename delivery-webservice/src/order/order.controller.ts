import { Controller, Post, Body, Get, Param, Delete } from '@nestjs/common';
import { OrderService } from './order.service';
import { Order } from './order.entity';

@Controller('order')
export class OrderController {

    constructor(private readonly service: OrderService) { }

    @Post()
    save(@Body() order: Order) {
        return this.service.save(order);
    }

    @Get()
    findAll() {
        return this.service.findAll();
    }

    @Get(':id')
    findById(@Param() id: number) {
        return this.service.findById(id);
    }

    @Delete(':id')
    remove(@Param() id: number) {
        return this.remove(id);
    }

}
