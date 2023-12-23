import { Navbar } from "./components/Navbar";
import { HomePage } from "./pages/HomePage";
import { ProjectsPage } from "./pages/ProjectsPage";
import { TechnologiesPage } from "./pages/TechnologiesPage";
import {ContactPage} from "./pages/ContactPage"
import { FooterPage } from "./pages/FooterPage";
function App() {
  return (
    <div className="App">
      <HomePage></HomePage>
      <TechnologiesPage></TechnologiesPage>
      <ProjectsPage></ProjectsPage>
      <ContactPage></ContactPage>
      <FooterPage></FooterPage>
      <div className="fixedComponents relative">
        <Navbar></Navbar>
        
      </div>
    </div>
  );
}

export default App;
        