const Card = ({ title, description }) => {
  return (
    <article
      style={{
        maxWidth: '256px',
        width: 'fit-content',
        border: '1px solid #222',
        padding: '8px',
      }}
    >
      <img src="https://picsum.photos/256/256" />
      <h3>{title}</h3>
      <p>{description}</p>
    </article>
  );
};

export default Card;
