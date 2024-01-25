import { NextResponse } from "next/server";
import { getTourCodes } from "@/app/api/helper";
export async function GET(request) {
  let result = await getTourCodes();
  return NextResponse.json(result);
}
