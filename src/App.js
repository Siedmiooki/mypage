import AboutMe from "./pages/AboutMe";
import Nav from "./components/Nav";
import GlobalStyle from "./components/GlobalStyle";
import Contact from "./pages/Contact";
import Projects from "./pages/Projects";
import ProjectDetail from "./pages/ProjectDetail";
import { Switch, Route, useLocation } from "react-router-dom"
import { AnimatePresence } from "framer-motion";

function App() {
  const location = useLocation()
  return (
    <div className="App">
      <GlobalStyle />
      <Nav />
      <AnimatePresence exitBeforeEnter>
        <Switch location={location} key={location.pathname}>
        <Route exact path="/">
            <AboutMe />
        </Route>
        <Route exact path="/work">
            <Projects />
        </Route>
        <Route path="/work/:id">
            <ProjectDetail />
        </Route>
        <Route path="/contact">
            <Contact />
        </Route>
      </Switch>
      </AnimatePresence>
    </div>
  );
}

export default App;
