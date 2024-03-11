import Link from "next/link"

export default function Home() {
  return (
    <>
      <div>
        <Link href={'/SignIn'}>
          <h1>Sign in page</h1>
        </Link>
        <Link href={'/SignUp'}>
          <h2>Sign Up page</h2>
        </Link>
        <Link href={'/Todo'}>
          <h2>Todo List page</h2>
        </Link>
      </div>
    </>
  );
}
