import { Provider } from "react-redux";
import App from "./App";
import store from "./store";
import ReactDOM from "react-dom"; // Fix import statement

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
