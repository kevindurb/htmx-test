import { Container } from 'typedi';

import { Client } from '../DatabaseClientFactory.js';
import { createTodo, getAllTodos } from '../queries/todos.queries.js';

export interface TodoProperties {
  id: number;
  done: boolean;
  summary: string;
}

export class TodoModel {
  private static db: Client = Container.get(Client);

  public constructor(
    public id: number,
    public done = false,
    public summary = '',
  ) {}

  public static from({ id, done, summary }: TodoProperties) {
    return new TodoModel(id, done, summary);
  }

  public static async create({ done, summary }: Omit<TodoProperties, 'id'>) {
    const [item] = await createTodo.run(
      { todos: [{ summary, done }] },
      this.db,
    );
    return TodoModel.from(item);
  }

  public static async getAll() {
    const result = await getAllTodos.run(undefined, this.db);

    return result.map(TodoModel.from);
  }
}
