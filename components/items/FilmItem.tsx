import React, { FC } from "react";

interface Props {
  title?: string;
  characters?: any;
  starships?: any;
}

const FilmItem: FC<Props> = ({ title, characters, starships }) => {
  return (
    <div style={{ backgroundColor: "pink" }}>
      <h3> {title}</h3>
      <p>
        Characters:{" "}
        {characters.slice(0, 3).map(({ name, id }) => (
          <span key={id}>{name}, &nbsp;</span>
        ))}
      </p>
      <p>
        Starships:
        {starships.map(({ name, id }) => (
          <span key={id}>{name}, &nbsp;</span>
        ))}
      </p>
      <style jsx>{`
        div {
          margin: 4px 0;
          padding: 4px 20px;
          border: solid 1px rgba(20, 20, 20, 0.1);
        }
      `}</style>
    </div>
  );
};

// export default withHover()(FilmItem);
export default FilmItem;
