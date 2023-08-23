"use client"

import { useEffect, useState } from "react";
import { ExperienceType } from "@/types";
import { useExperience } from "@/hooks/useExperience";
import ExperienceCard from "../experienceCard";
import { Spinner } from "@nextui-org/react";

export default function Experience() {

    const [experiences, setExperiences] = useState<ExperienceType[]>([]);
    const { getAll } = useExperience();

    useEffect(() => {

        const fetchData = async () => {
            try {
                setExperiences(await getAll());
            } catch (error) {
                console.log(error);
            }
        }
        fetchData();
    }, [])

    return (
        <section id="experience" className="gap-4 py-8 md:py-10 max-w-full">
            <h2 className="text-4xl text-blue-500 mb-4">PROFESSIONAL EXPERIENCE</h2>
            <div>
                {experiences.length > 0 ? (
                    experiences.map((experience) => (
                        <div key={experience._id} className="py-4">
                            <ExperienceCard experience={experience}/>
                        </div>
                    ))
                ) : (
                    <Spinner size="lg" className="Record<wraper, flex justify-center>"/>
                )}
            </div>
        </section>
    );
}