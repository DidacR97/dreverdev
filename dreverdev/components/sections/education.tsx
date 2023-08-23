"use client"

import { useEffect, useState } from "react";
import { EducationType } from "@/types";
import { useEducation } from "@/hooks/useEducation";
import ExperienceCard from "../experienceCard";
import { Spinner } from "@nextui-org/react";

export default function Education() {

    const [educations, setEducations] = useState<EducationType[]>([]);
    const { getAll } = useEducation();

    useEffect(() => {

        const fetchData = async () => {
            try {
                setEducations(await getAll());
            } catch (error) {
                console.log(error);
            }
        }
        fetchData();
    }, [])

    return (
        <section id="education" className="gap-4 py-8 md:py-10 max-w-full">
            <h2 className="text-4xl text-blue-500 mb-4">LEARNING AND DEVELOPMENT</h2>
            <div>
                {educations.length > 0 ? (
                    educations.map((education) => (
                        <div key={education._id} className="py-4">
                            <ExperienceCard experience={education}/>
                        </div>
                    ))
                ) : (
                    <Spinner size="lg" className="Record<wraper, flex justify-center>"/>
                )}
            </div>
        </section>
    );
}