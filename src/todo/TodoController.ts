import {
  BodyParam,
  Controller,
  Get,
  NotFoundError,
  Param,
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
  @Redirect('/todos')
  public async create(@BodyParam('summary') summary: string) {
    return TodoModel.create({ summary, done: false });
  }

  @Post('/:id/toggle-done')
  @Redirect('/todos')
  public async update(@Param('id') id: number) {
    const todo = await TodoModel.getById(id);
    if (!todo) throw new NotFoundError();

    todo.done = !todo.done;

    await todo.save();
  }
}
