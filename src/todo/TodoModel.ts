import { client } from '../database.js';
import {
  createTodo,
  getAllTodos,
  getById,
  updateTodo,
} from '../queries/todos.queries.js';

export interface TodoProperties {
  id: number;
  done: boolean;
  summary: string;
}

export class TodoModel {
  public constructor(
    public id: number,
    public done = false,
    public summary = '',
  ) {}

  public static async getById(id: number) {
    const result = await getById.run({ id }, client);

    if (result.length !== 1) return undefined;

    return TodoModel.from(result[0]);
  }

  public static from({ id, done, summary }: TodoProperties) {
    return new TodoModel(id, done, summary);
  }

  public static async create({ done, summary }: Omit<TodoProperties, 'id'>) {
    const [item] = await createTodo.run({ todos: [{ summary, done }] }, client);
    return TodoModel.from(item);
  }

  public static async getAll() {
    const result = await getAllTodos.run(undefined, client);

    return result.map(TodoModel.from);
  }

  public async save() {
    console.log({
      id: this.id,
      done: this.done,
      summary: this.summary,
    });
    await updateTodo.run(
      {
        done: this.done,
        summary: this.summary,
        id: this.id,
      },
      client,
    );
  }
}
