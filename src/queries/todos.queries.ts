/** Types generated for queries found in "src/queries/todos.sql" */
import { PreparedQuery } from '@pgtyped/runtime';

/** 'GetAllTodos' parameters type */
export type IGetAllTodosParams = void;

/** 'GetAllTodos' return type */
export interface IGetAllTodosResult {
  done: boolean;
  id: number;
  summary: string;
}

/** 'GetAllTodos' query type */
export interface IGetAllTodosQuery {
  params: IGetAllTodosParams;
  result: IGetAllTodosResult;
}

const getAllTodosIR: any = {"usedParamSet":{},"params":[],"statement":"select\n  id,\n  done,\n  summary\nfrom todos"};

/**
 * Query generated from SQL:
 * ```
 * select
 *   id,
 *   done,
 *   summary
 * from todos
 * ```
 */
export const getAllTodos = new PreparedQuery<IGetAllTodosParams,IGetAllTodosResult>(getAllTodosIR);


/** 'CreateTodo' parameters type */
export interface ICreateTodoParams {
  todos: readonly ({
    summary: string | null | void,
    done: boolean | null | void
  })[];
}

/** 'CreateTodo' return type */
export interface ICreateTodoResult {
  done: boolean;
  id: number;
  summary: string;
}

/** 'CreateTodo' query type */
export interface ICreateTodoQuery {
  params: ICreateTodoParams;
  result: ICreateTodoResult;
}

const createTodoIR: any = {"usedParamSet":{"todos":true},"params":[{"name":"todos","required":false,"transform":{"type":"pick_array_spread","keys":[{"name":"summary","required":false},{"name":"done","required":false}]},"locs":[{"a":41,"b":46}]}],"statement":"insert into todos (summary, done) values :todos returning *"};

/**
 * Query generated from SQL:
 * ```
 * insert into todos (summary, done) values :todos returning *
 * ```
 */
export const createTodo = new PreparedQuery<ICreateTodoParams,ICreateTodoResult>(createTodoIR);


