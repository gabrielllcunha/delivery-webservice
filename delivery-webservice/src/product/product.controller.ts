import { Controller, Post, Body, Get, Param, Delete } from '@nestjs/common';
import { ProductService } from './product.service';
import { Product } from './product.entity';

@Controller('product')
export class ProductController {

    constructor(private readonly service: ProductService) { }

    @Post()
    save(@Body() product: Product) {
        return this.service.save(product);
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
