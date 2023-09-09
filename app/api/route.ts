import { NextResponse } from "next/server";
import getSvg from "./getSvg.service";
export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const logo = searchParams.get("logo");
  if (logo) {
    const route = await getSvg(logo);
    return NextResponse.json(route);
  }
  return NextResponse.error();
}
