const Advantages = ({ items }) => {
	const renderItems = (items) => {
		return items.map((item) => {
			return (
				<div className={`advantages advantages--${item.id} container`}>
					<div className="advantages__block advantages__block--left">
						<h2 className="advantages__title">{item.title}</h2>

						<p className="advantages__para">{item.text}</p>
					</div>

					<div className="advantages__block advantages__block--right">
						<img
							className="advantages__img"
							src={item.img}
							alt=""
						/>
					</div>
				</div>
			);
		});
	};

	if (items.length >= 1) {
		return renderItems(items);
	}

	return null;
};

export default Advantages;
