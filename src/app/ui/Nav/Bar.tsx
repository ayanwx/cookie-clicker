import Link from "next/link";

export default function Bar() {
    return (
        <section className="flex justify-center items-center bg-slate-700 text-zinc-200 p-5">
            <Link href="/login" className="navbtn">
                {"Login"}
            </Link>
            <Link href="/signup" className="navbtn">
                {"Signup"}
            </Link>
        </section>
    );
}
