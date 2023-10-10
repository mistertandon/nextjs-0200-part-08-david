import { NextResponse } from "next/server";
import { limiter } from "./../config/limiter";

const GET = async (request: Request) => {
  const remaining = await limiter.removeTokens(1);
  const origin = request.headers.get("origin");
  if (remaining < 0) {
    return new NextResponse(null, {
      status: 429,
      statusText: "Rate limit exceeded",
      headers: {
        "Access-Control-Allow-Origin": origin || "*",
        "Content-Type": "text/plain",
      },
    });
  }
  return new Response(`Remaining: ${remaining} Hello NextJS`);
};

export { GET };
