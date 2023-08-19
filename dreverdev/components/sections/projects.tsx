"use client";

import { useEffect, useState } from "react";
import ProjectCard from "../projectCard";
import { useProject } from "@/hooks/useProject";
import { ProjectType } from "@/types";

export default function Projects() {

    const [projects, setprojects] = useState<ProjectType[]>([]);
    const { getAll } = useProject();

    useEffect(() => {

        const fetchData = async () => {
            try {
                setprojects(await getAll());
            } catch (error) {
                console.log(error);
            }
        }
        fetchData();
    }, [])

    return (
        <section id="projects" className="gap-4 py-8 md:py-10 max-w-full">
            <h2 className="text-4xl font-bold text-blue-500 mb-4">Projects Showcase</h2>
            <div className="flex flex-wrap">
            {projects.length > 0 ? (
                    projects.map((project) => (
                            <ProjectCard key={project._id} project={project}/>
                    ))
                ) : (
                    <span>No hay elementos disponibles</span>
                )}
            </div>
        </section>
    );
}