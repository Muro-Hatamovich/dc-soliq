const Info = ({ blocks }) => {
	const renderBlocks = (blocks) =>
		blocks.map((block) => (
			<div
				key={block.id}
				className={`info__block info__block--${block.id}`}
			>
				<img className="info__icon" src={block.icon} alt="alt" />
				<span className="info__title">{block.title}</span>

				<button className="info__btn">{block.button}</button>
			</div>
		));

	return <div className="info container">{renderBlocks(blocks)}</div>;
};

export default Info;
