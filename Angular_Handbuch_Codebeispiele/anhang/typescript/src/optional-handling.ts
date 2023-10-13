
type TodoStatus = 'BACKLOG' | 'IN_PROGRESS' | 'COMPLETED';
interface User {
  id: string
  name: string;
  avatar: string | undefined;
}
interface Todo {
  title: string;
  details: string;
  status: TodoStatus;
  assignee?: User;
}

// const todo: Todo = {title: 'Test', status: 'BACKLOG'};

const todos: Todo[] = [
  {title: 'Aufräumen', details: '...', status: 'IN_PROGRESS'},
  {title: 'Einkaufen', details: '...', status: 'COMPLETED'},
]

function assertValueIsDefined<T>(value: T | undefined | null): boolean {
  return Boolean(value);
}
const nextTodo = todos.find(todo => todo.status === 'BACKLOG');


if (nextTodo) {
  console.log(nextTodo.title)
}

if (assertValueIsDefined(nextTodo)) {
  console.log(nextTodo!.title)
}

console.log(nextTodo?.title);
console.log(nextTodo?.assignee?.name);

// ===================================================

class User2 {
  avatarUrl?: string;  
  constructor(
    public firstName: string, 
    public lastName: string
  ) {}        
}

function safePrintLength(str: string) {
  console.log(str.length);
}

const john = new User2('John', 'Doe');

if (john.avatarUrl) {
  safePrintLength(john.avatarUrl);
}