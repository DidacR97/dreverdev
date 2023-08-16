"use client"

import { ExperienceType } from "@/types";
import { faCalendarDays } from "@fortawesome/free-regular-svg-icons";
import { faLocationPin } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Card, CardBody, CardFooter, CardHeader, Chip, Divider, Image } from "@nextui-org/react";

export default function ExperienceCard({ experience }: { experience: ExperienceType }) {
    return (
        <Card>
            <CardHeader className="flex gap-3 flex-wrap">
                <span className="flex flex-row gap-2">
                    <div className="w-12 flex justify-center items-center rounded-md">
                        <Image
                            isBlurred
                            alt={`${experience.name} logo`}
                            radius="none"
                            src={`/images/logos/${experience.image}`}
                            width={48}
                        />
                    </div>
                    <h3 className="text-lg font-bold">{experience.name}</h3>
                </span>
                <span className="flex flex-row gap-2">
                    <div className="w-12 flex justify-center items-center bg-gradient-to-r from-content1 to-transparent rounded-full"><FontAwesomeIcon icon={faLocationPin} style={{ color: "#ea4335" }} /></div>
                    <h3>{experience.company}</h3>
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
                        <CardFooter className="flex flex-wrap gap-3">
                            {
                                experience.skills.map((skill) => (
                                    <Chip key={skill._id} className="">
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
    );
}