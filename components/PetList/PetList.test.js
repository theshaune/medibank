import { act, render } from "@testing-library/react";
import PetList from "./PetList";

const title = "Mock Title";

const pets = [
  { name: "Abe", type: "Human" },
  { name: "Eva", type: "Human" },
  { name: "Guy", type: "Human" },
  { name: "Tom", type: "Human" },
];

describe("usePets hook", () => {
  it("Title element to render with expected value", async () => {
    const { debug, getByTestId, result } = render(
      <PetList title={title} items={pets} />
    );
    const el = await getByTestId("PetList-Title");
    expect(el.textContent).toBe(title);
  });

  it("List element to render with expected value", async () => {
    const { debug, getByTestId, findAllByTestId, result } = render(
      <PetList title={title} items={pets} />
    );
    const el = await findAllByTestId("PetList-ListItem");
    const [abe, eva, guy, tom] = el;

    expect(abe.textContent).toBe(pets[0].name);
    expect(eva.textContent).toBe(pets[1].name);
    expect(guy.textContent).toBe(pets[2].name);
    expect(tom.textContent).toBe(pets[3].name);

    expect(el).toHaveLength(4);
  });
});
