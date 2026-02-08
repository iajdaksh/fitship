import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import { cookies } from "next/headers";

export const runtime = "nodejs";

export async function POST(req: Request) {
  const { email, password } = await req.json();

  if (email !== process.env.ADMIN_EMAIL) {
    return NextResponse.json({ error: "Invalid" }, { status: 401 });
  }

  const ok = bcrypt.compareSync(
    password,
    process.env.ADMIN_PASSWORD_HASH!
  );

  if (!ok) {
    return NextResponse.json({ error: "Invalid" }, { status: 401 });
  }

  (await cookies()).set("admin-auth", "true", {
    httpOnly: true,
    secure: true,
    path: "/",
  });

  return NextResponse.json({ success: true });
}
