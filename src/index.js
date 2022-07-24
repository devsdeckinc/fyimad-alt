import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import {
  createTheme,
  ThemeProvider,
  responsiveFontSizes,
} from "@mui/material/styles";
import { Provider } from "react-redux";
import { persistedStore, store } from "./redux/store";
import { PersistGate } from "redux-persist/integration/react";

let theme = createTheme({
  typography: {
    allVariants: {
      fontFamily: ["Poppins-Regular"].join(","),
      fontSize: 14,
    },
  },
  transparentCard: {
    background: "transparent !important",
  },
});
theme = responsiveFontSizes(theme);
ReactDOM.render(
  <React.StrictMode>
      <ThemeProvider theme={theme}>
        <Provider store={store}>
          <PersistGate loading={null} persistor={persistedStore}>
            <App />
          </PersistGate>
        </Provider>
      </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
