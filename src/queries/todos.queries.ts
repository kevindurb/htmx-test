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

const getAllTodosIR: any = {"usedParamSet":{},"params":[],"statement":"select id, done, summary\nfrom todos"};

/**
 * Query generated from SQL:
 * ```
 * select id, done, summary
 * from todos
 * ```
 */
export const getAllTodos = new PreparedQuery<IGetAllTodosParams,IGetAllTodosResult>(getAllTodosIR);


/** 'GetById' parameters type */
export interface IGetByIdParams {
  id: number;
}

/** 'GetById' return type */
export interface IGetByIdResult {
  done: boolean;
  id: number;
  summary: string;
}

/** 'GetById' query type */
export interface IGetByIdQuery {
  params: IGetByIdParams;
  result: IGetByIdResult;
}

const getByIdIR: any = {"usedParamSet":{"id":true},"params":[{"name":"id","required":true,"transform":{"type":"scalar"},"locs":[{"a":46,"b":50}]}],"statement":"select id, done, summary\nfrom todos\nwhere id =:id !"};

/**
 * Query generated from SQL:
 * ```
 * select id, done, summary
 * from todos
 * where id =:id !
 * ```
 */
export const getById = new PreparedQuery<IGetByIdParams,IGetByIdResult>(getByIdIR);


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

const createTodoIR: any = {"usedParamSet":{"todos":true},"params":[{"name":"todos","required":false,"transform":{"type":"pick_array_spread","keys":[{"name":"summary","required":false},{"name":"done","required":false}]},"locs":[{"a":41,"b":46}]}],"statement":"INSERT INTO todos (summary, done) VALUES :todos returning *"};

/**
 * Query generated from SQL:
 * ```
 * INSERT INTO todos (summary, done) VALUES :todos returning *
 * ```
 */
export const createTodo = new PreparedQuery<ICreateTodoParams,ICreateTodoResult>(createTodoIR);


/** 'UpdateTodo' parameters type */
export interface IUpdateTodoParams {
  done?: boolean | null | void;
  id: number;
  summary?: string | null | void;
}

/** 'UpdateTodo' return type */
export type IUpdateTodoResult = void;

/** 'UpdateTodo' query type */
export interface IUpdateTodoQuery {
  params: IUpdateTodoParams;
  result: IUpdateTodoResult;
}

const updateTodoIR: any = {"usedParamSet":{"done":true,"summary":true,"id":true},"params":[{"name":"done","required":false,"transform":{"type":"scalar"},"locs":[{"a":24,"b":28}]},{"name":"summary","required":false,"transform":{"type":"scalar"},"locs":[{"a":41,"b":48}]},{"name":"id","required":true,"transform":{"type":"scalar"},"locs":[{"a":61,"b":64}]}],"statement":"UPDATE todos\nSET\ndone = :done,\nsummary = :summary\nWHERE id = :id!"};

/**
 * Query generated from SQL:
 * ```
 * UPDATE todos
 * SET
 * done = :done,
 * summary = :summary
 * WHERE id = :id!
 * ```
 */
export const updateTodo = new PreparedQuery<IUpdateTodoParams,IUpdateTodoResult>(updateTodoIR);


