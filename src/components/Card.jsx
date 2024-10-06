const Card = ({ className, url }) => {
  return (
    <img
      className={`rounded-3xl h-72 w-98 object-cover ${className}`}
      src={url}
    />
  );
};

export default Card;
