import "./App.css";
import { Route, Switch } from "react-router-dom";
import Home from "./Components/Home";
import PlanetData from "./Components/Projects/PlanetData";
import GrailHouse from "./Components/Projects/GrailHouse";
// import Wrinkl from "./Components/Projects/Wrinkl";
import Evercast from "./Components/Projects/Evercast";
import Contact from "./Components/Contact";

function App() {
    return (
        <div className="app">
            {/* <div className="container"> */}
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/project/planetdata" component={PlanetData} />
                <Route exact path="/project/grailhouse" component={GrailHouse} />
                <Route exact path="/project/evercast" component={Evercast} />
                {/* <Route exact path="/project/wrinkl" component={Wrinkl} /> */}
                <Route exact path="/contact" component={Contact} />
            </Switch>
            {/* </div> */}
        </div>
    );
}

export default App;
