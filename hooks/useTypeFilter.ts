import React, { useState, useEffect, useReducer } from "react";
import {
  useAllStarshipsQuery,
  useAllFilmsQuery,
  useAllPersonsQuery
} from "../generated/graphql";
import { useRouter } from 'next/router'

const initState = {
  isLoading: true,
  browseType: "films",
  mainList: [],
  characterDropdownList: [],
  starshipsDropdownList: [],
  filterByCharacter: "",
  filterByStarship: "",
  error: ""
};

const reducer = (state, action) => {
  switch (action.type) {
    case "setLoading":
      return { ...state, isLoading: true };
    case "setBrowseType":
      return { ...state, browseType: action.payload };
    case "setMainList":
      return { ...state, mainList: action.payload, isLoading: false };
    case "characterDropdownList":
      return { ...state, characterDropdownList: action.payload };
    case "starshipsDropdownList":
      return { ...state, starshipsDropdownList: action.payload };
    case "setFilterByCharacter":
      return { ...state, filterByCharacter: action.payload };
    case "setFilterByStarship":
      return { ...state, filterByStarship: action.payload };
    case "error":
      return { ...state, error: "Oops, something went wrong" }
    default:
      return [];
  }
};

export const useTypeFilter = () => {
  const [state, dispatch] = useReducer(reducer, initState);
  const router = useRouter()
  const films = useAllFilmsQuery();
  const persons = useAllPersonsQuery();
  const starships = useAllStarshipsQuery();

  // set the main list by query param
  const param = router.query.browse
  useEffect(() => {
    dispatch({ type: "setBrowseType", payload: param })
    dispatch({ type: "setMainList", payload: [] });
  }, [param])

  useEffect(() => {
    // set the drop down lists
    let loading = persons.loading && starships.loading
    let error = persons.error && starships.error
    let data = persons.data && starships.data

    if (loading) {
      dispatch({ type: 'setLoading' })
    }
    if (error) {
      dispatch({ type: 'error' })
    }
    if (data) {
      let personsArr = persons.data.allPersons.map(p => p.name)
      let starshipsArr = starships.data.allStarships.map(s => s.name)
      dispatch({ type: "characterDropdownList", payload: personsArr })
      dispatch({ type: "starshipsDropdownList", payload: starshipsArr })
    }
  }, [persons, starships])

  useEffect(() => {
    if (state.browseType === "films") {
      if (films.loading) {
        dispatch({ type: "setLoading" });
      } else if (!films.error && films.data) {
        dispatch({ type: "setMainList", payload: films.data.allFilms });
      }
    }

    if (state.browseType === "persons") {
      if (persons.loading) {
        dispatch({ type: "setLoading" });
      } else if (!persons.error && persons.data) {
        dispatch({ type: "setMainList", payload: persons.data.allPersons });
      }
    }

    if (state.browseType === "starships") {
      if (starships.loading) {
        dispatch({ type: "setLoading" });
      } else if (!starships.error && starships.data) {
        dispatch({ type: "setMainList", payload: starships.data.allStarships });
      }
    }
  }, [films, persons, starships, state.browseType]);


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

  const handleBrowse = (e) => {
    e.preventDefault()
    router.push(`/?browse=${e.target.value}`, `/?browse=${e.target.value}`, { shallow: true });
  }

  const handleFilterByCharacter = e => {
    e.preventDefault();
    dispatch({ type: "setFilterByCharacter", payload: e.target.value });
  };

  const handleFilterByStarship = e => {
    e.preventDefault();
    dispatch({ type: "setFilterByStarship", payload: e.target.value });
  };

  const handlers = {
    handleBrowse,
    handleFilterByCharacter,
    handleFilterByStarship
  }

  return [state, dispatch, handlers];
};

