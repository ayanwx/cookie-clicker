import Bar from "./ui/Nav/Bar";
import Cookie from "./ui/Cookie";
import Score from "./ui/Score";

import Link from "next/link";

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
                    {"Leaderboard ->"}
                </Link>
            </section>
        </main>
    );
}
