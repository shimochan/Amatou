import { atom, selector } from 'recoil';
import { StressItem } from '../types';
import { Audio } from 'expo-av';

export const soundState = atom<Audio.Sound | undefined>({
    key: "audioState",
    default: undefined,
});