export default function Singup() {
    return (
        <section className="flex w-screen h-screen justify-center items-center">
            <form className="flex flex-col bg-slate-600 p-6">
                <input
                    type="text"
                    placeholder="Display Name"
                    maxLength={8}
                    className="inputfield"
                />

                <input
                    type="text"
                    placeholder="Username"
                    maxLength={8}
                    className="inputfield"
                />

                <input
                    type="password"
                    placeholder="Password"
                    maxLength={8}
                    className="inputfield"
                />

                <input
                    type="submit"
                    value="Sign Up"
                    className="navbtn text-zinc-200 mt-6"
                />
            </form>
        </section>
    );
}
