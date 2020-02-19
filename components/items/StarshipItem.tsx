import React, { FC } from "react";

interface Props {
  name: string;
}
const StarshipItem: FC<Props> = ({ name }) => {
  return (
    <div>
      <h3> {name}</h3>
      <style jsx>{`
        div {
          padding: 4px 20px;
          border: solid 1px rgba(20, 20, 20, 0.1);
        }
      `}</style>
    </div>
  );
};

export default StarshipItem;
