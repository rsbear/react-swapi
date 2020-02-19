import React, { FC } from "react";
import { useTypeFilter } from "../../hooks/useTypeFilter";
import withData from "../../HOC/withData";

const Layout: FC<any> = ({ state, dispatch, children }) => {
  // const [state, dispatch] = useTypeFilter();

  const handleBrowseSelect = e => {
    e.preventDefault();
    dispatch({ type: "setBrowseType", payload: e.target.value });
    dispatch({ type: "setMainList", payload: [] });
  };

  const handleFilterByCharacter = e => {
    e.preventDefault();
    dispatch({ type: "setFilterByCharacter", payload: e.target.value });
  };

  const handleFilterByStarship = e => {
    e.preventDefault();
    dispatch({ type: "setFilterByStarship", payload: e.target.value });
  };

  return (
    <div className="layout">
      <h3>SWAPI</h3>
      <nav>
        <label htmlFor="type">Browse: &nbsp;</label>
        <select
          className="typeFilter"
          defaultValue={state.browseType}
          onChange={e => handleBrowseSelect(e)}
        >
          <option value="films">Movie</option>
          <option value="persons">Characters</option>
          <option value="starships">Starships</option>
        </select>
        <h4>|</h4>
        <label htmlFor="type">Filter by character: &nbsp;</label>
        <select
          className="filters"
          defaultValue={state.browseType}
          onChange={e => handleFilterByCharacter(e)}
        >
          <option value="default">not set</option>
          {state.characterList.map((p, idx: number) => (
            <option value={p} key={idx}>
              {p}
            </option>
          ))}
        </select>
        <label htmlFor="type">Filter by starship: &nbsp;</label>
        <select
          className="filters"
          defaultValue={state.browseType}
          // onChange={e => handleSelect(e)}
          onChange={e => handleFilterByStarship(e)}
        >
          <option value="default">Not set</option>
          {state.starshipsList.map((p, idx: number) => (
            <option value={p} key={idx}>
              {p}
            </option>
          ))}
        </select>
      </nav>
      {children}
      <style jsx>{`
        nav {
          display: flex;
          flex-direction: row;
          align-items: center;
        }

        select.typeFilter {
          padding-right: 20px;
          margin-right: 20px;
        }

        h4 {
          margin-right: 20px;
          color: transparent;
          border-right: solid 1px gray;
        }
      `}</style>
    </div>
  );
};

export default Layout;
