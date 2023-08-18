"use client"

import { EducationType } from "@/types";
import { faCalendarDays } from "@fortawesome/free-regular-svg-icons";
import { faLocationPin } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Card, CardBody, CardFooter, CardHeader, Chip, Divider, Image } from "@nextui-org/react";

export default function EducationCard({ education }: { education: EducationType }) {
    return (
        <Card>
            <CardHeader className="flex gap-3 flex-wrap md:justify-between">
                <span className="flex flex-row gap-2 flex-wrap">
                    <div className="w-12 justify-center items-center rounded-md hidden md:flex">
                        <Image
                            isBlurred
                            alt={`${education.name} logo`}
                            radius="none"
                            src={`/images/logos/${education.image}`}
                            width={48}
                        />
                    </div>
                    <h3 className="text-xl font-bold flex items-center">{education.name}</h3>
                    <h4 className="text-lg"> on {education.place}</h4>
                </span>
                <span className="block">
                        <FontAwesomeIcon className="mr-1.5" icon={faCalendarDays} />
                        <span>{education.startDate} - {education.endDate == 9999 ? "present" : education.endDate}</span>
                </span>
            </CardHeader>
            <Divider />
            <CardBody>
                <p>{education.desc_en}</p>
            </CardBody>
            {
                (education.skills && education.skills.length > 0) ? (
                    <>
                        <Divider />
                        <CardFooter className="flex flex-wrap gap-3">
                            {
                                education.skills.map((skill) => (
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