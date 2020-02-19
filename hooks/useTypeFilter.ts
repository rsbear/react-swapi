import React, { useState, useEffect, useReducer } from "react";
import {
  useAllStarshipsQuery,
  useAllFilmsQuery,
  useAllPersonsQuery
} from "../generated/graphql";

const initState = {
  isLoading: true,
  browseType: "films",
  mainList: [],
  characterList: [],
  starshipsList: [],
  filterByCharacter: "",
  filterByStarship: ""
};

const reducer = (state, action) => {
  switch (action.type) {
    case "setLoading":
      return { ...state, isLoading: true };
    case "setBrowseType":
      return { ...state, browseType: action.payload };
    case "setMainList":
      return { ...state, mainList: action.payload, isLoading: false };
    case "characterList":
      return { ...state, characterList: action.payload };
    case "starshipsList":
      return { ...state, starshipsList: action.payload };
    case "setFilterByCharacter":
      return { ...state, filterByCharacter: action.payload };
    case "setFilterByStarship":
      return { ...state, filterByStarship: action.payload };
    default:
      return [];
  }
};

export const useTypeFilter = () => {
  const [state, dispatch] = useReducer(reducer, initState);
  const films = useAllFilmsQuery();
  const persons = useAllPersonsQuery();
  const starships = useAllStarshipsQuery();

  useEffect(() => {
    if (persons.loading) {
      dispatch({ type: 'setLoading' })
    } else if (!persons.error && persons.data) {
      let personsArr = persons.data.allPersons.map(p => p.name)
      dispatch({ type: "characterList", payload: personsArr })
    }
  }, [persons, starships]);

  useEffect(() => {
    if (starships.loading) {
      dispatch({ type: 'setLoading' })
    } else if (!starships.error && starships.data) {
      let starshipsArr = starships.data.allStarships.map(s => s.name)
      dispatch({ type: "starshipsList", payload: starshipsArr })

    }
  }, [starships])

  useEffect(() => {
    if (state.browseType === "films") {
      if (films.loading) {
        dispatch({ type: "setLoading" });
      } else if (!films.error && films.data) {
        dispatch({ type: "setMainList", payload: films.data.allFilms });
      }
    }
  }, [films, state.browseType]);

  useEffect(() => {
    if (state.browseType === "persons") {
      if (persons.loading) {
        dispatch({ type: "setLoading" });
      } else if (!persons.error && persons.data) {
        dispatch({ type: "setMainList", payload: persons.data.allPersons });
      }
    }
  }, [persons, state.browseType]);

  useEffect(() => {
    if (state.browseType === "starships") {
      if (starships.loading) {
        dispatch({ type: "setLoading" });
      } else if (!starships.error && starships.data) {
        dispatch({ type: "setMainList", payload: starships.data.allStarships });
      }
    }
  }, [starships, state.browseType]);


  useEffect(() => {
    if (state.browseType === "films") {
      if (!films.loading && !films.error) {
        let newArr = []

        films.data.allFilms.forEach((x) => {
          const charMap = x.characters.map(c => c.name)
          if (charMap.includes(state.filterByCharacter)) {
            newArr.push(x)
          }
        })
        dispatch({ type: 'setMainList', payload: newArr })
      }
    }
  }, [state.filterByCharacter])

  useEffect(() => {
    if (state.browseType === "films") {
      if (!films.loading && !films.error) {
        let newArr = []

        films.data.allFilms.forEach((x) => {
          const shipMap = x.starships.map(c => c.name)
          if (shipMap.includes(state.filterByStarship)) {
            newArr.push(x)
          }
        })
        dispatch({ type: 'setMainList', payload: newArr })
      }
    }
  }, [state.filterByStarship])

  return [state, dispatch];
};

