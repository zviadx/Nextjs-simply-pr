import { NextResponse } from "next/server";
import { headers, cookies } from "next/headers";
import { redirect } from "next/navigation";

export async function DELETE(req: Request, { params }: { params: { id: string } }) {
  const resParams = params.id

  const headerList= await headers()
  const headerType = headerList.get("Content-Type")

  const cookiesList = await cookies()
  const coo1 = cookiesList.get('Cookie_1')?.value

  return NextResponse.json({coo1})
}