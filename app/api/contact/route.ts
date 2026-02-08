import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const body = await req.json();

  console.log("User Message:", body);

  return NextResponse.json(
    { message: "Message received" },
    { status: 200 }
  );
}
