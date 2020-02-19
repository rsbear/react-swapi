import React, { FC, useEffect } from "react";
import { GetProps } from "../interfaces/GetProps";

import { useTypeFilter } from "../hooks/useTypeFilter";
import withData from "../HOC/withData";
import Layout from "../components/layouts/layout";
import FilmItem from "../components/items/FilmItem";
import PersonItem from "../components/items/PersonItem";
import StarshipItem from "../components/items/StarshipItem";

const Landing: GetProps<any> = ({ shortId }) => {
  const [state, dispatch] = useTypeFilter();

  return (
    <Layout state={state} dispatch={dispatch}>
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
      {state.browseType === "persons" &&
        state.mainList.map(({ id, name, films }: any) => (
          <PersonItem name={name} films={films} key={id} />
        ))}
      {state.browseType === "starships" &&
        state.mainList.map(({ id, name }: any) => (
          <StarshipItem name={name} key={id} />
        ))}
    </Layout>
  );
};

Landing.getInitialProps = async ctx => {
  const { shortId } = ctx.query;
  return { shortId };
};

export default withData(Landing);
