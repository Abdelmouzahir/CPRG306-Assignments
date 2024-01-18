import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        <h1>CPRG 306: Web Development 2 - Assignments</h1>
        <div>
        <div>
        <Link href="/week-2">
        <text> week 2 Assignment</text>
        </Link>
        </div>
      </div>
      </div>
    </main>
  )
}
