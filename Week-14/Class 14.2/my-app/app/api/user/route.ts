import { NextResponse } from "next/server";

export async function GET() {
    return NextResponse.json({ username: "harkirat", email: "harkirat@gmail.com" })
}