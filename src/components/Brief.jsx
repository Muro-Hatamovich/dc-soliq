const Brief = ({ title, first_paragraph, second_paragraph }) => {
	return (
		<div className="brief container">
			<h2 className="brief__title title-secondary title-secondary--colored">
				{title}
			</h2>

			<p className="brief__para para">{first_paragraph}</p>

			<p className="brief__para para">{second_paragraph}</p>
		</div>
	);
};

export default Brief;
