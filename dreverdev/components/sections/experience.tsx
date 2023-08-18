"use client"

import { useEffect, useState } from "react";
import { ExperienceType } from "@/types";
import { Card, CardHeader, CardBody, CardFooter, Divider, Link, Image, Chip } from "@nextui-org/react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationPin, faCalendarDays } from '@fortawesome/free-solid-svg-icons';
import { useExperience } from "@/hooks/useExperience";
import ExperienceCard from "../experienceCard";

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
        <section className="gap-4 py-8 md:py-10 max-w-full">
            <h2 className="text-4xl font-bold text-blue-500 mb-4">Professional Experience</h2>
            <div className="card-container">
                {experiences.length > 0 ? (
                    experiences.map((experience) => (
                        <div key={experience._id} className="py-4">
                            <ExperienceCard experience={experience}/>
                        </div>
                    ))
                ) : (
                    <span>No hay elementos disponibles</span>
                )}
            </div>
        </section>
    );
}