import { Controller, Get, Render } from 'routing-controllers';
import { Service } from 'typedi';

@Service()
@Controller('/todos')
export class TodosController {
  @Get('/')
  @Render('todosList.pug')
  public getAll() {
    return { todos: [] };
  }
}
