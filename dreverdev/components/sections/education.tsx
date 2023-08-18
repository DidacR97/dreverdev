"use client"

import { useEffect, useState } from "react";
import { EducationType } from "@/types";
import { useEducation } from "@/hooks/useEducation";
import EducationCard from "../educationCard";

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
        <section className="gap-4 py-8 md:py-10 max-w-full">
            <h2 className="text-4xl font-bold text-blue-500 mb-4">Learning and Development</h2>
            <div className="card-container">
                {educations.length > 0 ? (
                    educations.map((education) => (
                        <div key={education._id} className="py-4">
                            <EducationCard education={education}/>
                        </div>
                    ))
                ) : (
                    <span>No hay elementos disponibles</span>
                )}
            </div>
        </section>
    );
}