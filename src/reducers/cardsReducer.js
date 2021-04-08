import { CONSTANTS } from "../actions";

const initialState = {
  "card-0": {
    status: "Срочно",
    text: "Прочитать книгу",
    startDate: "12.06",
    endDate: "12.06",
    executor: "Иванов И.В.",
    id: `card-0`,
    list: "list-0"
  },
  "card-1": {
    status: "Срочно",
    text: "Прочитать книгу",
    startDate: "12.06",
    endDate: "12.06",
    executor: "Иванов И.В.",
    id: `card-1`,
    list: "list-0"
  },
  "card-2": {
    status: "В работе",
    text: "Прочитать книгу",
    startDate: "12.06",
    endDate: "12.06",
    executor: "Иванов И.В.",
    id: `card-2`,
    list: "list-0"
  },
  "card-3": {
    status: "Срочно",
    text: "Прочитать книгу",
    startDate: "12.06",
    endDate: "12.06",
    executor: "Иванов И.В.",
    id: `card-3`,
    list: "list-0"
  },
  "card-4": {
    status: "Готово",
    text: "Прочитать книгу",
    startDate: "12.06",
    endDate: "12.06",
    executor: "Иванов И.В.",
    id: `card-4`,
    list: "list-0"
  },
  "card-5": {
    status: "Готово",
    text: "Прочитать книгу",
    startDate: "12.06",
    endDate: "12.06",
    executor: "Иванов И.В.",
    id: `card-5`,
    list: "list-0"
  }
};

const cardsReducer = (state = initialState, action) => {
  switch (action.type) {
    case CONSTANTS.ADD_CARD: {
      const { text, listID, id } = action.payload;

      const newCard = {
        text,
        status: "Срочно",
        startDate: "12.06",
        endDate: "12.06",
        executor: "Жумаев",
        id: `card-${id}`,
        list: listID
      };

      return { ...state, [`card-${id}`]: newCard };
    }
    case CONSTANTS.EDIT_CARD: {
      const { id, newText } = action.payload;
      const card = state[id];
      card.text = newText;
      return { ...state, [`card-${id}`]: card };
    }

    case CONSTANTS.DELETE_CARD: {
      const { id } = action.payload;
      const newState = state;
      delete newState[id];
      return newState;
    }
    default:
      return state;
  }
};

export default cardsReducer;
