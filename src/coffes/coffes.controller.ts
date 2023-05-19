import { Controller, Get, Param } from '@nestjs/common';

@Controller('coffes')
export class CoffesController {
  @Get('falvours')
  findAll() {
    return 'This action returns all the coffees';
  }
  @Get(':id')
  findOne(@Param('id') id: string) {
    return `This action returns #${id} the coffees`;
  }
}
