import { atom, selector } from "recoil";

export const minsuteState = atom({
  key: "minutes",
  default: 0,
});

export const hoursSelector = selector<number>({
  key: "hours",
  get: ({ get }) => {
    const minutes = get(minsuteState);
    return minutes / 60;
  },
  set: ({ set }, newValue) => {
    const minutes = Number(newValue) * 60;
    set(minsuteState, minutes);
  },
});
