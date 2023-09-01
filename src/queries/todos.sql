/* @name getAllTodos */
select id, done, summary
from todos
order by id;


/* @name getById */
select id, done, summary
from todos
where id = :id!;

/*
  @name createTodo
  @param todos -> ((summary, done)...)
*/
INSERT INTO todos (summary, done) VALUES :todos returning *;

/* @name updateTodo */
UPDATE todos
SET
done = :done,
summary = :summary
WHERE id = :id!;
