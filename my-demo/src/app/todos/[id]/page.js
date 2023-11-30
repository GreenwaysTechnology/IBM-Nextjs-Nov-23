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
//generating title dynamically
export async function generateMetadata({ params, searchParams }, parent) {
    // read route params
    const id = params.id
    // fetch data
    const response = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`)
    const todo = await response.json()
    console.log(todo)
    return {
        title: `Todo - ${todo.id}`
    }
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