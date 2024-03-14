import { Bar } from "./ui/Nav/Bar";
import Image from "next/image";

export default function Home() {
  return (
    <main>
        <Bar />
        <section className="flex m-12 justify-center items-center">
            <Image
                src="/cookie.svg"
                alt="cookie"
                width="300"
                height="300"
            />
        </section>
    </main>
  );
}
