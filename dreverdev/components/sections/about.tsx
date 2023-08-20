import Image from "next/image";

const imageStyle = {
    position: "absolute",
    width: "auto",
    height: "100%",
    left: "50%",
    top: "50%",
    transform: "translate(-50%, -50%)",
}

export default function About() {
    return (
        <section id="about" className="gap-4 py-8 md:py-10 flex max-w-full h-screen items-center">
            <p className="text-xl flex flex-wrap w-[75%]">I'm a web developer skilled in JavaScript, experienced with Node.js and Next.js. I excel at solving complex challenges and value both teamwork and autonomy. My inherent curiosity keeps me evolving in the dynamic world of web development.</p>
            <div className="w-[300px] h-[300px] overflow-hidden relative rounded">
                <Image
                    alt={`me`}
                    src={`/images/other/me.jpg`}
                    width={300}
                    height={300}
                />
            </div>
        </section>
    );
}