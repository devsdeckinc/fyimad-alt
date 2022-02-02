import logo from "./logo.svg";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { createTheme, ThemeProvider, styled } from "@mui/material/styles";
import { orange } from "@mui/material/colors";
import { Paper, Typography } from "@mui/material";
import MUITheme from "./assets/theme/MUITheme";
import Home from "./pages/Home/Home";

import CssBaseline from "@mui/material/CssBaseline";
import WebRouting from "./Routing/WebRouting";

function App() {
  return (
    <div className="App">
      <CssBaseline />
      <MUITheme>
        <WebRouting />
      </MUITheme>
    </div>
  );
}

export default App;
