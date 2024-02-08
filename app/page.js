import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-start font-mono text-sm lg:flex text-lg flex-col">
        <h1 className="w-full text-lg">CPRG 306: Web Development 2 - Assignments | Abdel Mouzahir |</h1>
        <div className="text-lg flex items-center justify-start w-full">
        <Link href="/week-2"><text> week 2 Assignment</text></Link>
        </div>
        <div className="text-lg flex items-center justify-start w-full">
        <Link href="/week-3"><text> week 3 Assignment</text></Link>
        </div>
        <div className="text-lg flex items-center justify-start w-full">
        <Link href="/week-4"><text> week 4 Assignment</text></Link>
        </div>
        <div className="text-lg flex items-center justify-start w-full">
        <Link href="/week-5"><text> week 5 Assignment</text></Link>
        </div>
      </div>  
    </main>
  )
}
