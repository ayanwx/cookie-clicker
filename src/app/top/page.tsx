import { sql } from "@vercel/postgres";
import Link from "next/link";
import "../globals.css";

export default async function Leaderboard(): Promise<JSX.Element> {
    const { rows } = await sql`SELECT * FROM Players`;

    rows.sort((a, b) => a.score - b.score);

    return (
        <section>
            <div className="flex p-6 text-2xl bg-slate-700 text-zinc-200 items-center">
                <span className="flex-1">Leaderboard</span>
                <Link
                    href="/"
                    className="flex text-sm text-zinc-400 hover:underline"
                >
                    {"<- Back to Home"}
                </Link>
            </div>
            <ol className="flex flex-col p-6">
                {rows.map((row) => (
                    <li
                        key={row.username}
                        className="flex flex-row hover:underline"
                    >
                        <span className="bg-slate-500 text-slate-100">
                            {"#"}
                            {rows.indexOf(row) + 1}
                        </span>
                        <span className="bg-slate-400">{row.name}</span>
                        <span className="bg-slate-300">{row.score}</span>
                    </li>
                ))}
            </ol>
        </section>
    );
}
