import getPets, { url } from "./getPets";

export const data = [
  {
    name: "Bob",
    gender: "Male",
    pets: [
      {
        name: "Garfield",
        type: "Cat",
      },
      {
        name: "Fido",
        type: "Dog",
      },
    ],
  },
  {
    name: "Samantha",
    gender: "Female",
    age: 40,
    pets: [
      {
        name: "Tabby",
        type: "Cat",
      },
    ],
  },
  {
    name: "Steve",
    gender: "Male",
    pets: null,
  },
];

export const maleOwnersPets = [
  {
    name: "Garfield",
    type: "Cat",
  },
  {
    name: "Fido",
    type: "Dog",
  },
];

export const maleOwnersDogs = [
  {
    name: "Fido",
    type: "Dog",
  },
];


export const maleOwnersCats = [
  {
    name: "Garfield",
    type: "Cat",
  },
];

export const femaleOwnersCats = [
  {
    name: "Tabby",
    type: "Cat",
  },
];

describe("Get Pets API", () => {
  beforeEach(() => {
    fetchMock.doMock();
    fetch.mockResponseOnce(JSON.stringify({ data }));
  });

  it("calls `url` and returns data", async () => {
    const result = await getPets();

    expect(fetch.mock.calls.length).toEqual(1);
    expect(fetch.mock.calls[0][0]).toEqual(url);
    expect(result.data).toEqual(data);
  });
});
