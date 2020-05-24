import { Controller, Post, Body, Get, Param, Delete } from '@nestjs/common';
import { CustomerService } from './customer.service';
import { Customer } from './customer.entity';

@Controller('customer')
export class CustomerController {

    constructor(private readonly service: CustomerService) { }

    @Post()
    save(@Body() customer: Customer) {
        return this.service.save(customer);
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
