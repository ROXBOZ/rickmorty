import FlipCard from "./FlipCard";

const GridCharacters = ({ data, filterTerm }) => {
  console.log("filterTerm", filterTerm);

  return (
    <div className="character-grid-container">
      {data &&
        data
          .filter((d) => {
            return !filterTerm
              ? d
              : d.name.toLowerCase().includes(filterTerm.toLowerCase());
          })
          .map((d) => {
            return <FlipCard key={d.id} d={d} />;
          })}
    </div>
  );
};

export default GridCharacters;
