import { TODOS } from "./todos";
import { NextResponse } from "next/server";

//GET ALL 
export async function GET(request) {
    //send response
    return NextResponse.json(TODOS)
}

//POST operation
export async function POST(request, { params }) {
    // console.log(request)
    const payload = await request.json()
    console.log(payload)
    return NextResponse.json({ message: 'post request' })
}