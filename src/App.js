import "./App.css";
import { Route, Switch } from "react-router-dom";
import Home from "./Components/Home";
import PlanetData from "./Components/Projects/PlanetData";
import GrailHouse from "./Components/Projects/GrailHouse";
import Contact from "./Components/Contact";

function App() {
    return (
        <div className="App">
            <div className="Container">
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/project/planetdata" component={PlanetData} />
                    <Route exact path="/project/grailhouse" component={GrailHouse} />
                    <Route exact path="/" component={Contact} />
                </Switch>
            </div>
        </div>
    );
}

export default App;
