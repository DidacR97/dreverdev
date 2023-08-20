import BlindText from "../blindText";

export default function Presentation() {

    return (
        <section id="presentation" className="gap-4 py-8 md:py-10 flex flex-col justify-center max-w-full h-screen">
            <h3 className="mb-2">Hi!, I&apos;m</h3>
            <h2 className="text-3xl md:text-8xl text-blue-500 flex flex-wrap">Dídac Reverte.</h2>
            <BlindText />
            <p className={`text-lg max-w-[50%]`}>I&apos;m a software developer based near Barcelona, Spain, specialized in building extraordinary web solutions.</p>
        </section>
    );
}