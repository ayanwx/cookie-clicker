import Link from "next/link";

export default function Bar() {
    return (
        <section className="flex justify-center items-center bg-slate-700 text-zinc-200 p-6">
            <Link href="/auth" className="border-solid border-[1px] border-zinc-200 p-3 transition-all ease-in duration-100 text-[13pt] hover:text-slate-700 hover:bg-zinc-200">
                { "Login/Signup" }
            </Link>
        </section>
    );
}