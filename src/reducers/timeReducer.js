import { TIME_CHANGED, MINUTE_CHANGED, HOUR_CHANGED } from '../actions/types';

const INITIAL_STATE = {
  seconds: 0,
  minutes: 0,
  hour: 0,
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case TIME_CHANGED:
      return { ...state, seconds: state.seconds + 1 };
    case MINUTE_CHANGED:
      return { ...state, seconds: 0, minutes: state.minutes + 1 };
    case HOUR_CHANGED:
      return {
        ...state,
        seconds: 0,
        minutes: 0,
        hour: state.hour + 1,
      };
    default:
      return state;
  }
};
