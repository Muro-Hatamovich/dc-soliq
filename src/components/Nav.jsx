import { Link } from "react-router-dom";

const Nav = () => {
	return (
		<nav className="nav">
			<Link className="nav__link" to="/">
				bosh sahifa
			</Link>
			<Link className="nav__link" to="/about-us">
				biz haqimizda
			</Link>
			<Link className="nav__link" to="/">
				markaz faoliyati
			</Link>
			<Link className="nav__link" to="/">
				yangiliklar
			</Link>
			<Link className="nav__link" to="/">
				biz bilan aloqa
			</Link>
		</nav>
	);
};

export default Nav;
