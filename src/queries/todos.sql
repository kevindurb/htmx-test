/* @name getAllTodos */
select
  id,
  done,
  summary
from todos;

/*
  @name createTodo
  @param todos -> ((summary, done)...)
*/
insert into todos (summary, done) values :todos returning *;
