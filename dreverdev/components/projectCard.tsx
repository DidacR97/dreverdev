import React from "react";
import { Card, CardHeader, CardBody, CardFooter, Divider, Link, Image } from "@nextui-org/react";
import { ProjectType } from "@/types";

export default function ProjectCard({ project }: { project: ProjectType }) {
    return (
        <div className="md:w-1/2 p-4 flex">
            <Link href={project.link} isExternal>
                <Card className="h-full p-5">
                    <CardHeader>
                        <h3 className="text-xl font-bold">{project.name}</h3>
                    </CardHeader>
                    <Divider />
                    <CardBody>
                        <div className="flex justify-center">
                            <div className="max-w-[60%]">
                                <Image
                                    isBlurred
                                    alt={`${project.name} logo`}
                                    radius="none"
                                    src={`/images/projects/${project.image}`}
                                />
                            </div>
                        </div>
                    </CardBody>
                    <Divider />
                    <CardFooter>
                        <p>{project.desc}</p>
                    </CardFooter>
                </Card>
            </Link>
        </div>
    );
}
