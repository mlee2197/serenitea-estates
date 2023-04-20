import { Inter, Dosis } from "next/font/google";
import { useSession, signOut } from "next-auth/react";
import { useRouter } from "next/router";

export default function Home() {
  const { data: session, status } = useSession();
  const router = useRouter();

  if (status === 'loading') return <h1> loading... please wait</h1>;
  if (status === "unauthenticated") {
    return (
      <>
        Not signed in <br />
        <button onClick={() => router.push("/login")}>Sign in</button>
      </>
    );

  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      This is going to be the homepage
      <button onClick={() => signOut()}>Sign out</button>
    </main>
  );
}
