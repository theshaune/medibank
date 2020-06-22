import { act } from "@testing-library/react";
import { renderHook } from "@testing-library/react-hooks";
import { useQuery } from "react-query";

import usePets from "./usePets";

import {
  femaleOwnersCats,
  maleOwnersCats,
  maleOwnersDogs,
} from "../api/getPets.test";

jest.mock("react-query", () => {
  const { data } = require("../api/getPets.test");

  return {
    useQuery: (query, options) => {
      return {
        status: "success",
        loading: false,
        error: null,
        data,
      };
    },
  };
});

describe("usePets hook", () => {
  it("Retrieves a sorted array containing only: Male, Cats", async () => {
    await act(async () => {
      const renderHookResult = renderHook(() => usePets({ gender: "Male", type: "Cat" }));
      const { result, unmount } = renderHookResult;

      expect(result.current).toEqual(maleOwnersCats);
    });
  });

  it("Retrieves a sorted array containing only: Male, Dogs", () => {
    const renderHookResult = renderHook(() => usePets({gender: "Male", type:"Dog"}));
    const { result, unmount } = renderHookResult;
    expect(result.current).toEqual(maleOwnersDogs);
  });

  it("Retrieves an array containing only: Female, Cats", () => {
    const renderHookResult = renderHook(() => usePets({ gender: "Female", type: "Cat" }));
    const { result, unmount } = renderHookResult;
    expect(result.current).toEqual(femaleOwnersCats);
  });

  it("Retrieves an empty array", () => {
    const renderHookResult = renderHook(() => usePets({ gender: "", type: "" }));
    const { result, unmount } = renderHookResult;
    expect(result.current).toEqual([]);
  });
});
