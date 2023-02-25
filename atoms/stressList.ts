import { atom, selector } from 'recoil';
import { StressItem } from '../types';

export const stressListState = atom<StressItem[]>({
  key: "stressListState",
  default: [{
    key: 0,
    title: "Test 1",
    intensity: 0,
    dueDate: new Date(),
    isDone: false,
  },
  {
    key: 2,
    title: "Test 2",
    intensity: 1,
    dueDate: new Date(),
    isDone: true,
  },
  {
    key: 3,
    title: "Test 3",
    intensity: 2,
    dueDate: new Date(),
    isDone: false,
  }],
});

export const unDoneStressSelector = selector<StressItem[]>({
  key: "unDoneStressSelector",
  get: ({ get }) => {
    const stressList: StressItem[] = get(stressListState);
    return stressList.filter((stress) => stress.isDone == false);
  },
});

export const finishedStressSelector = selector<StressItem[]>({
  key: "finishedStressSelector",
  get: ({ get }) => {
    const stressList: StressItem[] = get(stressListState);
    return stressList.filter((stress) => stress.isDone == true);
  },
});