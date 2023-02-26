import { atom, selector } from 'recoil';
import { StressItem } from '../types';

export const stressListState = atom<StressItem[]>({
  key: "stressListState",
  default: [{
    key: 0,
    title: "ハッカソン アイデア出し",
    intensity: 0,
    dueDate: new Date(),
    isDone: true,
  },
  {
    key: 1,
    title: "ハッカソン 環境構築",
    intensity: 1,
    dueDate: new Date(),
    isDone: false,
  },
  {
    key: 2,
    title: "ハッカソン 開発",
    intensity: 2,
    dueDate: new Date(),
    isDone: false,
  },
  // {
  //   key: 3,
  //   title: "ハッカソン 開発",
  //   intensity: 2,
  //   dueDate: new Date(),
  //   isDone: false,
  // }
],
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