import { Controller, Get, Render } from 'routing-controllers';
import { Service } from 'typedi';

@Service()
@Controller()
export class IndexController {
  @Get('/')
  @Render('index.pug')
  public async home() {}
}
