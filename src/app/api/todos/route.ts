import { NextResponse } from "next/server";
const DATA_SOURCE_URL = "https://jsonplaceholder.typicode.com/todos";
const API_KEY = "123**JI";

/**
 *
 * @returns Open ThunderClient and use following inputs
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
 * @returns Open ThunderClient and use following inputs
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

export { GET, DELETE };
