import React, { FC } from "react";
import withData from "../../hocs/withData";
import FilmItem from "./../items/FilmItem";

const FilmsList: FC<any> = ({ state }) => {
  return (
    <div>
      <h1>Currently browsing {state.browseType}</h1>
      {state.isLoading && <h2>Loading...</h2>}
      {state.browseType === "films" &&
        state.mainList.map(({ id, title, characters, starships }: any) => (
          <FilmItem
            title={title}
            characters={characters}
            starships={starships}
            key={id}
          />
        ))}
    </div>
  );
};

export default withData()(FilmsList);
