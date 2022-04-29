const Logo = () => {
	return (
		<div className="logo">
			<header className="logo__head">
				<img className="logo__img" src={"/images/logo.svg"} alt="alt" />
			</header>

			<div className="logo__body">
				<span className="logo__title">soliq ma'lumotlarini</span>
				<span className="logo__subtitle">
					qayta ishlash markazi - duk
				</span>
			</div>
		</div>
	);
};

export default Logo;
