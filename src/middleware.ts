import { NextResponse } from "next/server";
const middleware = (request: Request) => {
  console.log("request", request);
  /**
   * We may restrict middleare in following ways
   *
   * 1.using condition, although it's not the recommended
   * one.
   * if (request.url.includes("api")) {
   * }
   *
   * 2. Using RegEx
   * const regex = new RegExp('/api/*')
   * if(regex.test(request.url)){
   * }
   *
   */

  return NextResponse.next();
};

/**
 * Preffered way to configure middleare
 */
const config = {
  matcher: "/api/:path*",
};
export { middleware, config };
