import { NextResponse } from "next/server";
import { TODOS } from "../todos";

//GET by id 
export async function GET(request, { params }) {
    //send response
    console.log(params)
    const id = params.id
    const todo = TODOS.filter(todo => todo.id === +id)
    return NextResponse.json(todo)
}
//Update by id :Todo you can add array update logic 
export async function PUT(request, { params }) {
    const id = params.id
    return NextResponse.json({ id: 'add update logic here' })
}


//remove by id :Todo you can write array remove logic 
export async function DELETE(request, { params }) {
    //send response
    const id = params.id
    return NextResponse.json({ id: 'add delete logic here' })
}
