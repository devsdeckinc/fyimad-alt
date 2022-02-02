import * as React from "react";
import IconButton from "@mui/material/IconButton";
import Box from "@mui/material/Box";
import {
  useTheme,
  ThemeProvider,
  createTheme,
  responsiveFontSizes,
} from "@mui/material/styles";
import { Paper } from "@mui/material";
import { amber, deepOrange, grey } from "@mui/material/colors";
const ColorModeContext = React.createContext({ toggleColorMode: () => {} });

export default function MUITheme(props) {
  const [mode, setMode] = React.useState("light");
  const colorMode = React.useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
      },
    }),
    []
  );

  let theme = React.useMemo(
    () =>
      createTheme({
        palette: {
          mode,
          ...(mode === "light"
            ? {
                card: {
                  background: "linear-gradient(159deg, rgba(37, 37, 50, 0.98) 0%, rgba(35, 35, 45, 0.98) 100%)",
                  textAlign: 'left',
                  minWidth: 250,
                  minHeight: '100%'
                },
                typography: {
                  primary: "red",
                },
                // palette values for light mode
                primary: {
                  main: "#000",
                  alternative: "#FFC107",
                },
                divider: "rgba(255, 255, 255, 0.12)",
                text: {
                  primary: "#fafafc",
                  secondary: "#8c8c8e",
                },
                typography: {
                  fontFamily: "'Montserrat', sans-serif",
                  primary: "#fafafc",
                  secondary: "rgba(255, 255, 255, 0.7)",
                  disabled: "rgba(255, 255, 255, 0.5)",
                },
                secondary: {
                  main: "#ffc107",
                },
                background: {
                  default: "#121212",
                  paper: "#121212",
                  secondary: "#191923",
                  alternative: "#20202a"
                },
                button: {
                  active: "#fff",
                  hover: "rgba(255, 255, 255, 0.08)",
                  selected: "rgba(255, 255, 255, 0.16)",
                },
                action: {
                  disabled: "rgba(255, 255, 255, 0.12)",
                  disabledBackground: "rgba(255, 255, 255, 0.12)",
                },
                h5: {
                  fontSize: '1rem',
                  fontWeight: 600
                },
                subtitle2: {
                  fontSize: '0.75rem',
                  fontWeight: 400,
                  color: "#a7a7a7",
                }
              }
            : {
              
                // palette values for dark mode
                primary: {
                  main: "#000",
                },
                card: {
                  background: "red",
                },
                divider: "#000",
                background: {
                  default: "#000",
                  paper: "#000",
                },
                text: {
                  primary: "#000",
                  secondary: "#000",
                },
                typography: {
                  fontFamily: "'Montserrat', sans-serif",
                },
                secondary: {
                  main: "#000",
                },
                h5: {
                  fontSize: '14px',
                  fontWeight: 600
                }
              }),
        },
      }),
    [mode]
  );

  theme = responsiveFontSizes(theme);

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>{props.children}</ThemeProvider>
    </ColorModeContext.Provider>
  );
}
