import { Body, Controller, Delete, Get, NotFoundException, Param, Put, Render } from '@nestjs/common';
import { AppService } from './app.service';
import { ReplaceProductDto } from './replaceProduct.dto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  @Render('index')
  getHello() {
    return {
      message: this.appService.getHello()
    };
  }

  #productList = [{
    name: "Washing machine",
    price: 299000
    },
    {
      name: "Basketball",
      price: 20000
    },
    {
      name: "Football",
      price: 30000
    }
  ]


  @Get('products')
  listProducts(){
    return this.#productList
  }


  @Get('products/:id')
  getProduct(@Param('id') id: string){
    return JSON.stringify(this.#productList[id])
  }

  @Delete('products/:id')
  deleteProduct(@Param('id') id: string){

    if(!this.#productList[id]){
      throw new NotFoundException('No product with this ID')
    }
    this.#productList.splice(Number(id), 1)

  }

  @Put('products/:id')
  replaceProduct(@Param('id') id: string, @Body() data: ReplaceProductDto){
    if(!this.#productList[id]){
      throw new NotFoundException('No product with this ID')
    } 
    this.#productList[id] = data.name

    
  }

}



