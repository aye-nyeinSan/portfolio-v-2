import { NextResponse, NextRequest } from "next/server";

const EXTERNAL_API = "http://127.0.0.1:8000";

export async function POST(request: NextRequest) {
  const ip = request.headers.get("x-forwarded-for")?.split(",")[0] ?? "unknown";

  const res = await fetch(`${EXTERNAL_API}/resume/visits`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "X-Forwarded-For": ip,
    },
  });
  const data = await res.json();
  return NextResponse.json(data);
}
