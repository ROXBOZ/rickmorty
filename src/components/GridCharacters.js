import FlipCard from "./FlipCard";

const GridCharacters = ({ data, filter }) => {
  return (
    <div className="character-grid-container">
      {data &&
        !filter &&
        data.map((d) => {
          return <FlipCard data={(data, d)} />;
        })}

      {data &&
        filter &&
        filter.map((d) => {
          return <FlipCard data={(data, d)} />;
        })}
    </div>
  );
};

export default GridCharacters;
