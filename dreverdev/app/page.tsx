import About from "@/components/sections/about";
import Education from "@/components/sections/education";
import Experience from "@/components/sections/experience";
import Presentation from "@/components/sections/presentation";
import Projects from "@/components/sections/projects";

export default function Home() {
	return (
		<>
			<Presentation />
			{/* <About /> */}
			<Experience />
			<Education />
			<Projects />
		</>

	);
}
