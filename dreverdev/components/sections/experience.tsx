"use client"

import { useEffect, useState } from "react";
import { ExperienceType } from "@/types";
import { Card, CardHeader, CardBody, CardFooter, Divider, Link, Image, Chip } from "@nextui-org/react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationPin, faCalendarDays } from '@fortawesome/free-solid-svg-icons';

export default function Experience() {

    const [experiences, setExperiences] = useState<ExperienceType[]>([]);

    useEffect(() => {

        const fetchData = async () => {
            try {
                const response = await fetch('/api/experience/getExperiences');
                const json = await response.json();
                setExperiences(json)
            } catch (error) {
                console.log(error);
            }
        }
        fetchData();
    }, [])

    return (
        <section className="gap-4 py-8 md:py-10">
            <h2 className="text-4xl font-bold text-blue-500 mb-4">Work Experience</h2>
            <div className="card-container">
                {experiences.length > 0 ? (
                    experiences.map((experience) => (
                        <div key={experience._id} className="py-4">
                            <Card className="">
                                <CardHeader className="flex gap-3">
                                    <Image
                                        alt={`${experience.name} logo`}
                                        height={40}
                                        radius="none"
                                        src={`/images/logos/${experience.image}`}
                                        width={40}
                                    />
                                    <h3 className="text-lg font-bold">{experience.name}</h3>
                                    <Divider orientation="vertical" />
                                    <span className="text-lg">
                                        <FontAwesomeIcon className="mr-1.5" icon={faLocationPin} style={{ color: "#ea4335" }} />{experience.company}
                                    </span>
                                </CardHeader>
                                <Divider />
                                <CardBody>
                                    <p>{experience.desc_en}</p>
                                    <p>
                                        <FontAwesomeIcon className="mr-1.5" icon={faCalendarDays} />
                                        <span>{experience.startDate} - {experience.endDate}</span>
                                    </p>

                                </CardBody>
                                {
                                    (experience.skills && experience.skills.length > 0) ? (
                                        <>
                                            <Divider />
                                            <CardFooter>
                                                {
                                                    experience.skills.map((skill) => (
                                                        <Chip key={skill._id} className="mr-1.5">
                                                            <div className="flex items-center">
                                                                <Image
                                                                    alt={`${skill.name} logo`}
                                                                    radius="none"
                                                                    height={16}
                                                                    src={`/images/icons/${skill.image}`}
                                                                    width={16}
                                                                />
                                                                <span className="ml-1.5">{skill.name}</span>
                                                            </div>
                                                        </Chip>
                                                    ))
                                                }
                                            </CardFooter>
                                        </>
                                    ) :
                                        (null)
                                }


                            </Card>
                        </div>
                    ))
                ) : (
                    <span>No hay elementos disponibles</span>
                )}
            </div>
        </section>
    );
}