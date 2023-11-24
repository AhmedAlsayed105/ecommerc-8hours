import { Box, CssBaseline, ThemeProvider } from "@mui/material";
import { ColorModeContext, useMode } from "./theme";
import HeaderOne from "./Component/Header/HeaderOne";
import HeaderTwo from "./Component/Header/HeaderTwo";
import HeaderThree from "./Component/Header/HeaderThree";
import Hero from "./Component/Hero/Hero";
import ProductFilter from "./Component/Main/ProductFilter";
import Footer from "./Component/Footer/Footer";
import ScrollTop from "./Component/ScrollToTop/ScrollTop";

function App() {
  const [theme, colorMode] = useMode();
  return (

    <ColorModeContext.Provider
      // @ts-ignore
      value={colorMode}
    >
      <ThemeProvider
        // @ts-ignore
        theme={theme}
      >
        <CssBaseline />
        <div className="App">
          <HeaderOne />
          <HeaderTwo />
          <HeaderThree />
          
          <Box bgcolor={theme.palette.bgBody.main}>
            <Hero />
            <ProductFilter/>
          </Box>
          <Footer/>
          <ScrollTop/>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
