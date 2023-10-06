import { NextResponse } from "next/server";
const DATA_SOURCE_URL = "https://jsonplaceholder.typicode.com/todos";
const API_KEY = "123**JI";

/**
 *
 * Open ThunderClient and use following inputs
 * Type: GET,
 * URL : http://localhost:3001/api/todos
 */
const GET = async () => {
  const res = await fetch(DATA_SOURCE_URL);

  const todos: Todo[] = await res.json();

  return NextResponse.json(todos);
};

/**
 *
 * Open ThunderClient and use following inputs
 * Type: DELETE,
 * URL : http://localhost:3001/api/todos
 * Body: {"id":2} Note: Id can be any valid number
 */
const DELETE = async (request: Request) => {
  const { id }: Partial<Todo> = await request.json();
  const res = await fetch(`${DATA_SOURCE_URL}/${id}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      "API-KEY": API_KEY,
    },
  });
  console.log("Res Status", res.status);
  console.log("id", id);
  return NextResponse.json({ message: `Todo ${id} has been deleted` });
};

/**
 *
 * Open ThunderClient and use following inputs
 * Type: POST,
 * URL : http://localhost:3001/api/todos
 * Body: {
 *          "userId": 4,
 *          "title": "REST API NextJs 13.5.3"
 *      }
 */
const POST = async (request: Request) => {
  const { userId, title }: Partial<Todo> = await request.json();
  if (!userId || !title) {
    return NextResponse.json({ message: "Missing required field in payload" });
  }

  const res = await fetch(DATA_SOURCE_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "API-KEY": API_KEY,
    },
    body: JSON.stringify({ userId, title, completed: false }),
  });

  const newTodo: Todo = await res.json();
  console.log("Res Status", res.status);

  return NextResponse.json(newTodo);
};

/**
 *
 * Open ThunderClient and use following inputs
 * Type: PUT,
 * URL : http://localhost:3001/api/todos
 * Body: {
 *          "userId": 4,
 *          "title": "REST API NextJs 13.5.3 PRO",
 *          "completed": true,
 *          "id": 1
 *      }
 */
const PUT = async (request: Request) => {
  const { id, userId, title, completed }: Todo = await request.json();

  if (!id || !userId || !title || typeof completed !== "boolean") {
    return NextResponse.json({ message: "Missing required field in payload" });
  }

  const res = await fetch(`${DATA_SOURCE_URL}/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      "API-KEY": API_KEY,
    },
    body: JSON.stringify({ userId, title, completed }),
  });

  return NextResponse.json({ message: `PUT request status: ${res.status}` });
};

export { GET, DELETE, POST, PUT };
