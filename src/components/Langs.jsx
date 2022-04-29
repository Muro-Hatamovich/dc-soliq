import { useState } from "react";
import { CgChevronDown } from "react-icons/cg";

const Langs = () => {
	const [isActive, setIsActive] = useState(false);

	const activate = () => setIsActive((prev) => (prev = !prev));

	const renderLangs = (langs) => {
		return langs.map((lang, i) => {
			return (
				<li key={i} className="langs__item">
					{lang.render}
				</li>
			);
		});
	};

	return (
		<div className="langs">
			<button className="langs__btn" onClick={activate}>
				<CgChevronDown className="langs__icon" />
				O'zbekcha
			</button>

			<ul
				className={
					isActive
						? "langs__list shadow"
						: "langs__list langs__list--hidden"
				}
			>
				{renderLangs([
					{ id: 1, locale: "uz", render: "O'zbekcha" },
					{ id: 2, locale: "ru", render: "Русский" },
				])}
			</ul>
		</div>
	);
};

export default Langs;
