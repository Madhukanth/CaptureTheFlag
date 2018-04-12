import { TIME_CHANGED, MINUTE_CHANGED, HOUR_CHANGED } from './types';

export const timeChanged = () => ({
  type: TIME_CHANGED,
});

export const minutesChanged = () => ({
  type: MINUTE_CHANGED,
});

export const hourChanged = () => ({
  type: HOUR_CHANGED,
});
