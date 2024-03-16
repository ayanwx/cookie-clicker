import { Input } from "@/app/lib/definitions";

export default function Login() {
    const inputs: Input[] = [
        {
            type: "text",
            placeholder: "Username",
            maxlength: 8,
        },
        {
            type: "password",
            placeholder: "Password",
            maxlength: 8,
        },
    ];

    return (
        <section className="flex w-screen h-screen justify-center items-center">
            <form className="flex flex-col bg-slate-600 p-6">
                {inputs.map((input) => (
                    <input
                        key={input.placeholder}
                        type={input.type}
                        placeholder={input.placeholder}
                        className="inputfield"
                    />
                ))}

                <input
                    type="button"
                    value="Login"
                    className="navbtn text-zinc-200 mt-6"
                />
            </form>
        </section>
    );
}
