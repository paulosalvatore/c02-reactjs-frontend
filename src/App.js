// React
import React from "react";
import { Switch, Route } from "react-router-dom";

// Components
import { Home } from "./pages/Home/Home";

// CSS
import "./App.css";

export function App() {
    return (
        <div className="App">
            <header className="App-header">Personagens</header>

            <div className="content">
                <Switch>
                    <Route path="/" exact={true} component={Home} />
                </Switch>
            </div>
        </div>
    );
}
