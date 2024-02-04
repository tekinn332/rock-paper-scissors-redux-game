export const user_choice = (choice) => ({
    type:"USER_CHOICE",
    payload: choice
});

export const computer_choice = () => ({
    type: "COMPUTER_CHOICE"
});

export const set_result = (result) => ({
    type: "SET_RESULT",
    payload:result
});