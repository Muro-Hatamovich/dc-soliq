import List from "./List";
import { BsCheckLg } from "react-icons/bs";

const Banner = ({ title, sub, highlight, features, img }) => {
	const renderFeatures = (features) => {
		return features.map((feature, i) => (
			<li className="banner__feature" key={i}>
				<BsCheckLg className="banner__icon" />
				{feature}
			</li>
		));
	};

	return (
		<div className="banner container">
			<div className="banner__block">
				<h1 className="banner__title">{title}</h1>

				<p className="banner__sub">{sub}</p>

				<span className="banner__highlight">{highlight}</span>

				<List className="banner__features">
					{renderFeatures(features)}
				</List>
			</div>

			<div className="banner__block">
				<img className="banner__img" src={"/images/dc.jpg"} alt="alt" />
			</div>
		</div>
	);
};

export default Banner;
