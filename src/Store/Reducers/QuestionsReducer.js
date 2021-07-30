import {
  ADD_QUESTION_SUCCESS,
  CLEAN_QUESTIONS,
  RECEIVE_QUESTIONS_SUCCESS,
  RECEIVE_VOTE_SUCCESS,
} from "../Actions/ActionTypes";

const initialSate = {};

export const questionReducer = (state = initialSate, action) => {
  switch (action.type) {
    case RECEIVE_QUESTIONS_SUCCESS:
      return sortStateByTimestamp({
        ...state,
        ...action.payload,
      });

    case CLEAN_QUESTIONS:
      return initialSate;

    case RECEIVE_VOTE_SUCCESS:
      return {
        ...state,
        [action.payload.questionId]: {
          ...state[action.payload.questionId],
          [action.payload.answer]: {
            ...state[action.payload.questionId][action.payload.answer],
            votes: state[action.payload.questionId][
              action.payload.answer
            ].votes.concat([action.payload.userId]),
          },
        },
      };

    case ADD_QUESTION_SUCCESS:
      console.log(`QR_QR_QR: payload: ${JSON.stringify(action.payload)}`);
      return sortStateByTimestamp({
        ...state,
        [action.payload.id]: action.payload,
      });

    default: {
      return state;
    }
  }
};

const sortStateByTimestamp = (questions) => {
  let sortedQuestions = Object.values(questions).sort(function (b, a) {
    return a.timestamp - b.timestamp;
  });

  const sortedQuestionObj = {};
  sortedQuestions.map((question) => {
    sortedQuestionObj[question.id] = question;
    return 0;
  });

  return sortedQuestionObj;
};
