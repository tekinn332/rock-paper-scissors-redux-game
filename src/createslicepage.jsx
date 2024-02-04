export const initialstate = {
userChoice: null,
computerChoice: null,
result: null
};

const gameReducer = (state = initialstate, action) => {
    switch (action.type) {
      case "USER_CHOICE": 
        return {
          ...state,
          userChoice: action.payload,
        };
      case "COMPUTER_CHOICE":
        const choices = ["rock", "paper", "scissors"];
        const computerChoice = choices[Math.floor(Math.random() * choices.length)]; 
        return {
          ...state,
          computerChoice,
        };
      case "SET_RESULT":
        return {
          ...state,
          result: action.payload,
        };
      default:
        return state;
    }
  };
export default gameReducer;