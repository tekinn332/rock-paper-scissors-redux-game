import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { user_choice, computer_choice, set_result } from "./actions";

const App = () => {
  const dispatch = useDispatch();
  const { userChoice, computerChoice, result } = useSelector(
    (state) => state.game
  );

  const handleChoice = (choice) => {
    dispatch(user_choice(choice));
    dispatch(computer_choice());

    const choices = ["rock", "paper", "scissors"];
    const userIndex = choices.indexOf(choice);
    const computerIndex = choices.indexOf(computerChoice);

    if (userIndex === computerIndex) {
      dispatch(set_result("It is a tie!"));
    } else if ((userIndex - computerIndex + 3) % 3 === 1) {
      dispatch(set_result("You Win"));
    } else {
      dispatch(set_result("You Lose"));
    }
  };

  return (
    <div>
      <h1>Rock, Paper, Scissors</h1>
      <div>
        <button onClick={() => handleChoice("rock")}>Rock</button>
        <button onClick={() => handleChoice("paper")}>Paper</button>
        <button onClick={() => handleChoice("scissors")}>Scissors</button>
      </div>
      <div>
        <p>User's Choice: {userChoice}</p>
        <p>Computer's Choice: {computerChoice}</p>
        <p>Result: {result}</p>
      </div>
    </div>
  );
};
export default App;
