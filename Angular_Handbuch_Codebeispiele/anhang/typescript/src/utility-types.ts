namespace UtilityTypes {

  interface User {
    firstName: string;
    lastName: string;
    avatarUrl?: string;
  }
  type TodoStatus = 'BACKLOG' | 'IN_PROGRESS' | 'COMPLETED';
  interface Todo {
    title: string;
    details: string;
    status: TodoStatus;
    assignee?: User;
  }

  console.log('Partial:')

type PartialTodo = Partial<Todo>;
function updateTodo(todo: Todo, properies: PartialTodo): Todo {
  return {...todo, ...properies}
}
const todo1: Todo = {
  title: 'Aufräumen',
  details: 'Im Wohnzimmer anfangen',
  status: 'BACKLOG'
};
const todo2 = updateTodo(todo1, {status: 'IN_PROGRESS'})
console.log(todo2); // {"title":"Aufräumen","details":"Im Wohnzimmer anfangen","status":"IN_PROGRESS"}

// const todo3 = updateTodo(todo1, {state: 'IN_PROGRESS'})

console.log('Required:')

const testTodo: Required<Todo> = {
  title: 'Aufräumen',
  details: 'Im Wohnzimmer anfangen',
  status: 'BACKLOG',
  assignee: {
    firstName: 'John',
    lastName: 'Doe',
  }
}

console.log(testTodo);

console.log('Readonly:')

function printTodo(todo: Readonly<Todo>) {
  console.log(`Titel: ${todo.title}, Status: ${todo.status}`);
//  todo.title = 'Neuer Titel'; => verboten
}

printTodo(todo1);

console.log('Omit;')

interface BlogPost {
  id: string;
  title: string;
  content: string;
  author?: User
}

type CreateBlogPostRequest = Omit<BlogPost, 'id'>;

function createBlogPost(request: CreateBlogPostRequest) {
  // speichere blogpost per HTTP im Backend
  console.log('creating blogpost with data', request);
}

const request: CreateBlogPostRequest = {
  title: 'Angular 13 erschienen',
  content: 'Die neue Version von Angular...'
}
createBlogPost(request);

type BlogPreview = Pick<BlogPost, 'title' | 'author'>

const summary: BlogPreview = {
  title: 'Angular 13 erschienen'
}

}