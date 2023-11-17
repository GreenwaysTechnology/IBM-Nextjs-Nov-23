export default function TodoPage(props) {
    return <div>
        <h1>Todo Id: {props.params.id}</h1>
    </div>
}

async function fetchTodos() {
    const url = `https://jsonplaceholder.typicode.com/todos`
    const response = await fetch(url)
    console.log('fetching...')
    return response.json()
}
//build time page creation.
export async function generateStaticParams() {
    console.log('building')
    const todos = await fetchTodos()
    return todos.map(todo => {
        let id = todo.id.toString()
        return {
            id: id
        }
    })
}