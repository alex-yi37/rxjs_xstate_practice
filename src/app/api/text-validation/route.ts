import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const reqUrl = new URL(request.url).searchParams;
  const inputParam = reqUrl.get("input") || ""; // ideally add some sort of indication that incorrect param was passed

  const inputIsValid = typeof inputParam === "string" && inputParam.length > 5;

  return NextResponse.json({
    user_input: inputParam,
    is_valid: inputIsValid,
  });
}
