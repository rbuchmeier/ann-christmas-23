const Stars = ({ count = 100 }) => {
  const stars = Array.from({ length: count }).map((_, index) => {
    const style = {
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      animationDelay: `${Math.random() * 2}s`,
      animationDuration: `${Math.random() * 3 + 2}s`,
    };
    return <div key={index} className="star" style={style} />;
  });

  return <>{stars}</>;
};

export default Stars;
