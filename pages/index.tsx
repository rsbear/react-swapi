import React, { FC, useEffect } from "react";
import { GetProps } from "../interfaces/GetProps";
import { useRouter } from "next/dist/client/router";

import { useTypeFilter } from "../hooks/useTypeFilter";
import withData from "../hocs/withData";
import Layout from "../components/layouts/layout";
import FilmItem from "../components/items/FilmItem";
import PersonItem from "../components/items/PersonItem";
import StarshipItem from "../components/items/StarshipItem";
import FilmsList from "../components/Lists/FilmsList";

const Landing: GetProps<any> = props => {
  // const [state, dispatch, handlers] = useTypeFilter();

  return (
    <Layout>
      <h1>landing page</h1>
      <FilmsList />
      {/* <h1>Currently browsing {state.browseType}</h1>
      {state.isLoading && <h2>Loading...</h2>}
      {state.browseType === "films" &&
        state.mainList.map(({ id, title, characters, starships }: any) => (
          <FilmItem
          // title={title}
          // characters={characters}
          // starships={starships}
          // key={id}
          />
        ))}
      {state.browseType === "persons" &&
        state.mainList.map(({ id, name, films }: any) => (
          <PersonItem name={name} films={films} key={id} />
        ))}
      {state.browseType === "starships" &&
        state.mainList.map(({ id, name }: any) => (
          <StarshipItem name={name} key={id} />
        ))} */}
    </Layout>
  );
};

export default withData()(Landing);
