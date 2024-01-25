import { NextResponse } from "next/server";
import { getTourCodeInfo } from "@/app/api/helper";
export async function GET(request, context) {
  const id = context.params.id;
  console.log("id", id);
  let result = await getTourCodeInfo(id);
  return NextResponse.json(result);
}
