import { atom, selector } from "recoil";

export const minsuteState = atom({
  key: "minutes",
  default: 0,
});

export const hoursSelector = selector({
  key: "hours",
  get: ({ get }) => {
    const minutes = get(minsuteState);
    return minutes / 60;
  },
});
