import { useQuery } from "react-query";
import { useEffect, useState } from "react";

import getPets from "../api/getPets";
import sortAlphabetically from "../lib/sortAlphabetically";

/**
 * Return array of filtered & sorted pets.
 * @param { string } gender
 * @param { string } type
 * @param { Array } initialData
 */
const usePets = ({ gender, type, initialData }) => {
  const { status, data = [] } = useQuery("petOwners", getPets, { initialData });

  const pets = sortAlphabetically(
    data
      .filter((o) => o.gender === gender && o.pets)
      .reduce((ac, cv) => [...ac, ...cv.pets], [])
      .filter((o) => o.type === type),
    "name"
  );

  return pets;
};

export default usePets;
