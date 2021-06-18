import { ThemeProvider } from "@material-ui/styles";
import { Provider } from "react-redux";
import Routes from "../routes";
import store from "../store";
import theme from "./theme";
import "./App.css";

function App() {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <Routes />
      </ThemeProvider>
    </Provider>
  );
}

export default App;
