import Logo from "./Logo";
import Nav from "./Nav";
import Langs from "./Langs";

const Header = () => {
	return (
		<header className="header container shadow">
			<Logo />
			<Langs />
			<Nav />
		</header>
	);
};

export default Header;
