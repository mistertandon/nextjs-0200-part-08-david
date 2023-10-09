import { NextResponse } from "next/server";
const middleware = (request: Request) => {
  console.log("request", request);
  return NextResponse.next();
};
export { middleware };
