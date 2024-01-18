import Link from "next/link";

export default function StudentInfo() {
    return (
      <main className="flex min-h-screen flex-col">
      <h1>Shopping List</h1>
      <div>
       Abdeljalil mouzahir
      </div>
      <div>
      <Link href="https://github.com/Abdelmouzahir"> 
        <text>My Github</text>
      </Link>
      </div>
      </main>
    );
  }