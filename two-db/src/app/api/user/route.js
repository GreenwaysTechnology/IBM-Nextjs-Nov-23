import { prisma } from "@/lib/prisma-pg";
// import { prismaSQLite } from "@/lib/prisma-sqllite"
import { NextResponse } from "next/server";

export async function GET(request) {
    // const user = await prismaSQLite.customer.findMany({});
    const user = await prisma.user.findMany({})
    if (!user) {

        return new NextResponse("No users");
    }
    return NextResponse.json(user);
}