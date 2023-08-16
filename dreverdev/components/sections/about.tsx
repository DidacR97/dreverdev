"use client"
import { Card, CardBody, Image } from "@nextui-org/react";

export default function About() {
    return (
        <section className="gap-4 py-8 md:py-10">
            <Card
                isBlurred
                className="border-none bg-background/60 dark:bg-default-100/50"
                shadow="sm"
            >
                <CardBody>
                    <div className="grid grid-cols-6 md:grid-cols-12 gap-6 md:gap-4 items-center justify-center">
                        <div className="relative col-span-6 md:col-span-4 max-h-300">
                            <Image
                                alt="mainImage"
                                isZoomed
                                className="object-cover"
                                height={100}
                                shadow="md"
                                src="/images/pedraforca.jpg"
                                width="100%"
                            />
                        </div>
                        <div className="flex flex-col col-span-6 md:col-span-8">
                            <h2 className="text-4xl font-bold text-blue-500 mb-4">Beyond the keyboard</h2>
                            <p>
                                Soy Dídac Reverte, desarrollador web con especialización en JavaScript, trabajando intensamente con herramientas como Node.js y Next.js. Mi enfoque se centra en abordar desafíos complejos, respaldado por una fuerte capacidad de resolución de problemas. Mi experiencia me ha enseñado el valor tanto del trabajo en equipo como del individual, pero es mi curiosidad intrínseca la que constantemente me impulsa a aprender y evolucionar en el cambiante mundo del desarrollo web.
                            </p>
                        </div>
                    </div>

                </CardBody>
            </Card>
        </section>
    );
}