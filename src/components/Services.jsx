const Services = ({ items }) => {
	const renderItems = (items) => {
		return items.map((service) => (
			<div key={service.id} className="services__item">
				<img className="services__icon" src={service.icon} alt="alt" />
				<span className="services__name">{service.name}</span>
			</div>
		));
	};

	return (
		<div className="services container">
			<h2 className="services__title title-primary">Markaz faoliyati</h2>

			<div className="services__items">{renderItems(items)}</div>
		</div>
	);
};

export default Services;
