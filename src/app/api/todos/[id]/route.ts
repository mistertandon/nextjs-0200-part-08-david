import { NextResponse } from "next/server";
const DATA_SOURCE_URL = "https://jsonplaceholder.typicode.com/todos";
type TodoProps = { params: { id: string } };
/**
 *
 * Open ThunderClient and use following inputs
 * Type: GET,
 * URL : http://localhost:3001/api/todos/1
 */
const GET = async (request: Request, { params: { id } }: TodoProps) => {
  const res = await fetch(`${DATA_SOURCE_URL}/${id}`);

  const todo: Todo = await res.json();
  return NextResponse.json(todo);
};

export { GET };
