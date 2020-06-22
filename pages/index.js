import { useQuery } from "react-query";
import { useState } from "react";

import Page from "../components/Page/Page";
import PetList from "../components/PetList/PetList";

import getPets from "../api/getPets";
import usePets from "../hooks/usePets";

const Home = ({ pets }) => {
  const maleCats = usePets({ gender: "Male", type: "Cat", initialData: pets });
  const femaleCats = usePets({ gender: "Female", type: "Cat", initialData: pets});

  return (
    <Page>
      <PetList title="Male" items={maleCats} />
      <PetList title="Female" items={femaleCats} />
    </Page>
  );
};

export const getServerSideProps = async () => {
  const pets = await getPets();

  return {
    props: { pets },
  };
};

export default Home;