
import { auth, signIn, signOut } from "auth";
import Link from "next/link";


export default async function Home() {
  const session = await auth()
  return (
    <>
      <div className="h-screen w-screen bg-black text-white flex-col gap-5 p-10 justify-center items-center flex">
        <Link href={"/Todo"}>Explore your the todo list</Link>

        {
          session && session.user ? (
            <>
              <div className="flex  flex-col  gap-2">
                <p> you are signed in {session.user.name}</p>
                <form action={async () => {
                  "use server"
                  await signOut()
                }}>
                  <button type="submit"> click here to Sign out</button>
                </form>
              </div>

            </>

          ) : (
            <>
              <form action={async () => {
                "use server"
                await signIn()
              }}>
                <button type="submit">Sign In</button>
              </form>
            </>
          )
        }

      </div>
    </>
  );
}
