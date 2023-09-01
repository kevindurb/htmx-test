import {
  BodyParam,
  Controller,
  Get,
  Post,
  Redirect,
  Render,
} from 'routing-controllers';
import { Service } from 'typedi';

import { TodoModel } from './TodoModel.js';

@Service()
@Controller('/todos')
export class TodoController {
  @Get('/')
  @Render('todoList.pug')
  public async getAll() {
    return { todos: await TodoModel.getAll() };
  }

  @Post('/')
  @Redirect('/:id')
  public async create(@BodyParam('summary') summary: string) {
    return TodoModel.create({ summary, done: false });
  }
}
