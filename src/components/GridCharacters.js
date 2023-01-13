import FlipCard from "./FlipCard";

const GridCharacters = ({ data, filter }) => {
  return (
    <div className="character-grid-container">
      {data &&
        !filter &&
        data.map((d) => {
          return <FlipCard key={d.id} d={d} />;
        })}

      {data &&
        filter &&
        filter.map((d) => {
          return <FlipCard key={d.id} d={d} />;
        })}
    </div>
  );
};

export default GridCharacters;
