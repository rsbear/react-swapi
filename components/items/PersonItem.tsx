import React, { FC } from "react";

interface Props {
  name: string;
  films: any;
}
const PersonItem: FC<Props> = ({ name, films }) => {
  return (
    <div>
      <h3>{name}</h3>
      <p>
        Films:{" "}
        {films.map(({ title, id }) => (
          <span key={id}>{title}, &nbsp;</span>
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

export default PersonItem;
