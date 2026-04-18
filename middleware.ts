import { NextResponse, NextRequest } from "next/server";

export function middleware(req: NextRequest) {
  const origin = req.headers.get("origin") ?? req.headers.get("referer") ?? "";
  const allowed = [process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000"];
  if (!allowed.some((a) => origin.startsWith(a))) {
    return new NextResponse("Not found", { status: 404 });
  }
}
export const config = { matcher: "/api/:path*" };
