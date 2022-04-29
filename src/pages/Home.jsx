import Banner from "../components/Banner";
import Brief from "../components/Brief";
import Info from "../components/Info";
import Services from "../components/Services";
import Advantages from "../components/Advantages";

// Content
import { data } from "../state/content";

const Home = () => {
	const { banner } = data["uz"];
	const { brief } = data["uz"];
	const { info } = data["uz"];
	const { services } = data["uz"];
	const { advantages } = data["uz"];

	return (
		<div className="home push">
			<Banner
				title={banner.title}
				sub={banner.sub}
				highlight={banner.highlight}
				features={banner.features}
			/>

			<Brief
				title={brief.title}
				first_paragraph={brief.first_paragraph}
				second_paragraph={brief.second_paragraph}
			/>

			<Info blocks={info.blocks} />

			<Services items={services.items} />

			<Advantages items={advantages.items} />
		</div>
	);
};

export default Home;
