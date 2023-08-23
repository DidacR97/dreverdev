import React from "react";
import { Card, CardHeader, CardBody, CardFooter, Divider, Link, Image, Button, ButtonGroup } from "@nextui-org/react";
import { ProjectType } from "@/types";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faPaperPlane } from "@fortawesome/free-regular-svg-icons";
import { faBlog } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function ProjectCard({ project }: { project: ProjectType }) {
    return (
        <div className="md:w-1/2 p-4 flex">

            <Card className="h-full p-5">
                <CardHeader>
                    <Link href={project.link} isExternal><h3 className="text-xl font-bold">{project.name}</h3></Link>
                </CardHeader>
                <Divider />
                <CardBody>
                    <div className="flex justify-center">
                        <div className="max-w-[60%]">
                            <Link href={project.link} isExternal>
                                <Image
                                    isBlurred
                                    alt={`${project.name} logo`}
                                    radius="none"
                                    src={`/images/projects/${project.image}`}
                                />
                            </Link>
                        </div>
                    </div>
                    <Divider />
                    <p>{project.desc}</p>
                </CardBody>
                <Divider />
                <CardFooter className="flex justify-around">
                    <ButtonGroup className="w-3/4">
                        {
                            project.link ? (
                                <Button
                                    href={project.link}
                                    as={Link}
                                    variant="flat"
                                    isExternal
                                    isIconOnly
                                    size="lg"
                                >
                                    <FontAwesomeIcon className="" icon={faPaperPlane} />
                                </Button>
                            ) : null
                        }
                        {
                            project.github ? (
                                <Button
                                    href={project.github}
                                    as={Link}
                                    variant="flat"
                                    color="default"
                                    isExternal
                                    isIconOnly
                                    size="lg"
                                >
                                    <FontAwesomeIcon className="" icon={faGithub} />
                                </Button>
                            ) : null
                        }
                        {
                            project.blog ? (
                                <Button
                                    href={project.blog}
                                    as={Link}
                                    variant="flat"
                                    isExternal
                                    isIconOnly
                                    size="lg"
                                >
                                    <FontAwesomeIcon className="" icon={faBlog} />
                                </Button>
                            ) : null
                        }
                    </ButtonGroup>
                </CardFooter>
            </Card>
        </div>
    );
}
