import Link from 'next/link'

export default function About() {
  return (
    <>
      <h1>Pagina About</h1>
      <ul>
        <li>
          <Link href="/">
            <a>Voltar</a>
          </Link>
        </li>
      </ul>
    </>
  )
}
