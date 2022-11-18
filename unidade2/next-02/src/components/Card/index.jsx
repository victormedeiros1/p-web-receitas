import Image from 'next/image';

const Card = ({ title, description, thumb }) => {
  return (
    <article
      style={{
        color: '#fff',
        backgroundColor: '#00333F',
        fontFamily: 'verdana',
        maxWidth: '400px',
        width: 'fit-content',
        border: '1px solid #222',
        padding: '16px',
        margin: 'auto',
      }}
    >
      <Image src={thumb} objectFit="contain" />
      <h3 style={{ fontWeight: 700 }}>{title}</h3>
      <p style={{ fontSize: 12 }}>{description}</p>
    </article>
  );
};

export default Card;
