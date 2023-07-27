import { withAuth } from "next-auth/middleware";
import { NextResponse } from "next/server";

export default withAuth(
  function middleware(req) {
    console.log("middleware is running @@@@@@@@@@@@@@@@@@@@@ ");
    console.log(req.nextUrl);
  },
  {
    callbacks: {
      authorized: ({ token }) => !!token,
    },
  }
);

// See "Matching Paths" below to learn more
export const config = {
  matcher: "/about",
};
