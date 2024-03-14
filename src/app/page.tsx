import Bar from "./ui/Nav/Bar";
import Cookie from "./ui/Cookie";
import Score from "./ui/Score";

import Link from "next/link";

//import { sql } from "@vercel/postgres";
//
//export default async function Cart(): Promise<JSX.Element> {
//  const { rows } = await sql`CREATE TABLE IF NOT EXISTS users (Name varchar(255), Username varchar(255), Password varchar(255), Score Int, CreatedAt Int)`;
//
//  return (
//    <div>
//      {rows.map((row) => (
//        <div key={row.id}>
//          {row.id} - {row.quantity}
//        </div>
//      ))}
//    </div>
//  );
//}

export default function Home() {
  return (
    <main>
        <Bar />
        <Cookie />
        <Score />
        <section className="flex justify-center items-center m-12">
            <Link
                href="/top"
                className="bg-slate-700 text-zinc-200 p-3 justify-center items-center"
            >
                { "Leaderboard ->" }
            </Link>
        </section>
    </main>
  );
}