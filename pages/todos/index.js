import styles from '../../styles/Todo.module.css'

import Link from 'next/link'

export async function getStaticProps() {
  const data = await fetch('https://jsonplaceholder.typicode.com/todos')

  const todos = await data.json()

  // console.log(todos)

  return {
    props: { todos }
  }
}

export default function Todos({ todos }) {
  return (
    <>
      <h1>Tarefas para fazer</h1>
      <ul className={styles.todolist}>
        {todos.map(todo => (
          <li key={todo.id}>
            <Link href={`/todos/${todo.id}`}>
              <a>{todo.title}</a>
            </Link>
          </li>
        ))}
      </ul>
    </>
  )
}
