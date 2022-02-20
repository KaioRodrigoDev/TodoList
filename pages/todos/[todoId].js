import Link from 'next/link'

export async function getStaticProps(context) {
  const { params } = context

  const data = await fetch(
    `https://jsonplaceholder.typicode.com/todos/${params.todoId}`
  )

  const todo = await data.json()

  return {
    props: { todo }
  }
}

export async function getStaticPaths() {
  const response = await fetch('https://jsonplaceholder.typicode.com/todos')

  const data = await response.json()

  const paths = data.map(todo => {
    return {
      params: {
        todoId: `${todo.id}`
      }
    }
  })
  return { paths, fallback: false }
}

export default function Todo({ todo }) {
  return (
    <>
      <Link href="/todos">
        <a>Voltar </a>
      </Link>
      <h1> Exibindo o ToDo {todo.id}</h1>
      <h3>Texto: {todo.title}</h3>
      <p>
        Comentario 1
        <Link href={` /todos/${todo.id}/comments/1 `}>
          <a>Detalhes</a>
        </Link>
      </p>
      <p>
        Comentario 2
        <Link href={` /todos/${todo.id}/comments/2 `}>
          <a>Detalhes</a>
        </Link>
      </p>
      <p>
        Comentario 3
        <Link href={` /todos/${todo.id}/comments/3 `}>
          <a>Detalhes</a>
        </Link>
      </p>
    </>
  )
}
