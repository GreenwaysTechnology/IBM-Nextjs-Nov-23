import { TODOS } from "./todos-mock"
import Link from "next/link"

export default function TodosPage() {
    return <div>
        <ul>
            {TODOS.map(todo => {
                return <li>
                    <Link href={`/todos/${todo.id}`}>{todo.title}</Link>
                </li>
            })}
        </ul>
    </div>
}