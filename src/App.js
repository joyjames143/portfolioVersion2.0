import './App.css';
import Projects from "./Projects"
import Skills from "./Skills.js"
import Contact from "./Contact.js"
import About from "./About.js"
import {Route,BrowserRouter as Router ,Switch} from "react-router-dom"
import AboutDetail from "./AboutDetail"
import ProjectsDetail from "./ProjectsDetail"
import SkillsDetail from "./SkillsDetails"
import ContactDetails from "./ContactDetails"

import ForMobile from "./ForMobile"

function App() {
  return (
    <Router>
      <Switch>
      <Route path="/about" component={AboutDetail} />
      <Route path="/project" component={ProjectsDetail}/>
      <Route path="/skill" component={SkillsDetail}/>
      <Route path="/contact" component={ContactDetails}/>
        <div className="app">
          <Route path="/" component={About} />
          <Route path="/" component={Skills} />
          <Route path="/" component={Projects} />
          <Route path="/" component={Contact} />
        </div>
     </Switch>  
    </Router>
  );
}

export default App;
