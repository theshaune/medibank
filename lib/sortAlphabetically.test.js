import sortAlphabetically from "./sortAlphabetically";

describe("Sort Alphabetically ", () => {
  const data = [
    {
      name: "David",
    },
    {
      name: "bree",
    },
    {
      name: "Andrew",
    },
    {
      name: "Charlie",
    },
  ];

  const sortedData = [
    {
      name: "Andrew",
    },
    {
      name: "bree",
    },
    {
      name: "Charlie",
    },
    {
      name: "David",
    },
  ];

  it("Returns array sorted by name in A-Z order", () => {
    const people = sortAlphabetically(data, "name");
    expect(people).toEqual(sortedData);
  });

  it("Returns array matching the original order", () => {
    const pets = sortAlphabetically(data, "invalid key");
    expect(pets).toEqual(pets);
  });
});
