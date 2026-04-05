import { NextResponse, } from "next/server";

const EXTERNAL_API = "http://127.0.0.1:8000";

export async function GET() {
  const res = await fetch(`${EXTERNAL_API}/resume/visitor-status`);
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
