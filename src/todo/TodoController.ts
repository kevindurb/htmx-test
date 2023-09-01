import { Type } from 'class-transformer';
import { IsBoolean } from 'class-validator';
import {
  Body,
  BodyParam,
  Controller,
  Get,
  NotFoundError,
  Param,
  Post,
  Put,
  Redirect,
  Render,
} from 'routing-controllers';
import { Service } from 'typedi';

import { TodoModel } from './TodoModel.js';

class UpdateTodoInput {
  public summary?: string;

  @Type(() => Boolean)
  @IsBoolean()
  public done?: boolean;
}

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

  @Put('/:id')
  @Redirect('/todos')
  public async update(
    @Param('id') id: number,
    @Body() updates: UpdateTodoInput,
  ) {
    const todo = await TodoModel.getById(id);
    if (!todo) throw new NotFoundError();

    todo.done = updates.done ?? todo.done;
    todo.summary = updates.summary ?? todo.summary;

    await todo.save();
  }
}
