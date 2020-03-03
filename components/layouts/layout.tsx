import React, { FC } from "react";
import { useTypeFilter } from "../../hooks/useTypeFilter";
import withData from "../../HOC/withData";

const Layout: FC<any> = ({ state, dispatch, handlers, children }) => {
  // const [state, dispatch] = useTypeFilter();

  return (
    <div className="layout">
      <h3>SWAPI</h3>
      <nav>
        <label htmlFor="type">Browse: &nbsp;</label>
        <select
          className="typeFilter"
          defaultValue={state.browseType}
          onChange={e => handlers.handleBrowse(e)}
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
          onChange={e => handlers.handleFilterByCharacter(e)}
        >
          <option value="default">not set</option>
          {state.characterDropdownList.map((p, idx: number) => (
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
          onChange={e => handlers.handleFilterByStarship(e)}
        >
          <option value="default">Not set</option>
          {state.starshipsDropdownList.map((p, idx: number) => (
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
