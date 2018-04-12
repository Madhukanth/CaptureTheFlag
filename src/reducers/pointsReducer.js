import {
  POINTS_CHANGED,
  PASS_CHANGED,
  QUESTION_1,
  QUESTION_2,
  QUESTION_3,
  QUESTION_4,
  QUESTION_5,
  QUESTION_6,
  QUESTION_7,
  QUESTION_8,
  QUESTION_9,
  QUESTION_10,
  QUESTION_11,
  QUESTION_12,
  QUESTION_13,
  QUESTION_14,
  QUESTION_15,
  QUESTION_16,
  QUESTION_17,
  QUESTION_18,
  QUESTION_19,
  QUESTION_20,
  QUESTION_21,
  QUESTION_22,
  QUESTION_23,
  QUESTION_24,
  QUESTION_25,
  QUESTION_26,
  QUESTION_27,
  QUESTION_28,
  QUESTION_29,
  QUESTION_30,
  QUESTION_31,
  QUESTION_32,
  QUESTION_33,
  QUESTION_34,
  QUESTION_35,
} from '../actions/types';

const INITIAL_STATE = {
  points: 0,
  pass: false,
  question1: true,
  question2: true,
  question3: true,
  question4: true,
  question5: true,
  question6: true,
  question7: true,
  question8: true,
  question9: true,
  question10: true,
  question11: true,
  question12: true,
  question13: true,
  question14: true,
  question15: true,
  question16: true,
  question17: true,
  question18: true,
  question19: true,
  question20: true,
  question21: true,
  question22: true,
  question23: true,
  question24: true,
  question25: true,
  question26: true,
  question27: true,
  question28: true,
  question29: true,
  question30: true,
  question31: true,
  question32: true,
  question33: true,
  question34: true,
  question35: true,
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case POINTS_CHANGED:
      return { ...state, points: state.points + 100 };
    case PASS_CHANGED:
      return { ...state, pass: !state.pass };
    case QUESTION_1:
      return { ...state, question1: false };
    case QUESTION_2:
      return { ...state, question2: false };
    case QUESTION_3:
      return { ...state, question3: false };
    case QUESTION_4:
      return { ...state, question4: false };
    case QUESTION_5:
      return { ...state, question5: false };
    case QUESTION_6:
      return { ...state, question6: false };
    case QUESTION_7:
      return { ...state, question7: false };
    case QUESTION_8:
      return { ...state, question8: false };
    case QUESTION_9:
      return { ...state, question9: false };
    case QUESTION_10:
      return { ...state, question10: false };
    case QUESTION_11:
      return { ...state, question11: false };
    case QUESTION_12:
      return { ...state, question12: false };
    case QUESTION_13:
      return { ...state, question13: false };
    case QUESTION_14:
      return { ...state, question14: false };
    case QUESTION_15:
      return { ...state, question15: false };
    case QUESTION_16:
      return { ...state, question16: false };
    case QUESTION_17:
      return { ...state, question17: false };
    case QUESTION_18:
      return { ...state, question18: false };
    case QUESTION_19:
      return { ...state, question19: false };
    case QUESTION_20:
      return { ...state, question20: false };
    case QUESTION_21:
      return { ...state, question21: false };
    case QUESTION_22:
      return { ...state, question22: false };
    case QUESTION_23:
      return { ...state, question23: false };
    case QUESTION_24:
      return { ...state, question24: false };
    case QUESTION_25:
      return { ...state, question25: false };
    case QUESTION_26:
      return { ...state, question26: false };
    case QUESTION_27:
      return { ...state, question27: false };
    case QUESTION_28:
      return { ...state, question28: false };
    case QUESTION_29:
      return { ...state, question29: false };
    case QUESTION_30:
      return { ...state, question30: false };
    case QUESTION_31:
      return { ...state, question31: false };
    case QUESTION_32:
      return { ...state, question32: false };
    case QUESTION_33:
      return { ...state, question33: false };
    case QUESTION_34:
      return { ...state, question34: false };
    case QUESTION_35:
      return { ...state, question35: false };

    default:
      return state;
  }
};
