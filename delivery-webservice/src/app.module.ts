import { Module } from '@nestjs/common';
import { CustomerController } from './customer/customer.controller';
import { Customer } from './customer/customer.entity';
import { CustomerService } from './customer/customer.service';
import { OrderController } from './order/order.controller';
import { Order } from './order/order.entity';
import { OrderService } from './order/order.service';
import { OrderItem } from './orderItem/orderItem.entity';
import { ProductController } from './product/product.controller';
import { Product } from './product/product.entity';
import { ProductService } from './product/product.service';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: '12345',
      database: 'delivery-webservice',
      entities: [
        Customer,
        Order,
        OrderItem,
        Product
      ],
      synchronize: true,
      logging: true
    }),
    TypeOrmModule.forFeature([
      Customer,
      Order,
      OrderItem,
      Product
    ])
  ],
  controllers: [
    CustomerController,
    OrderController,
    ProductController
  ],
  providers: [
    CustomerService,
    OrderService,
    ProductService
  ],
})
export class AppModule {}
