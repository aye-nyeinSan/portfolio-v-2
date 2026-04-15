import { NextResponse, } from "next/server";

const EXTERNAL_API = process.env.RESUME_API_URL;

export async function GET() {
  if (!EXTERNAL_API) {
    return NextResponse.json(
      { total_visitors: 0, total_love_count: 0, error: "RESUME_API_URL not set" },
      { status: 500 }
    );
  }
  const res = await fetch(`${EXTERNAL_API}/resume/visitor-status`);
  if (!res.ok) {
    return NextResponse.json(
      { total_visitors: 0, total_love_count: 0 },
      { status: res.status }
    );
  }
  const data = await res.json();
  return NextResponse.json(data);
}

export async function POST() {
 
  const res = await fetch(`${EXTERNAL_API}/resume/love-votes`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
  });
    const data = await res.json();
    console.log("successful send !")
  return NextResponse.json(
    { message: "Data received", data },
    { status: 201 }
  );
}
