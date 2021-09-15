// React
import React from "react";
import { Switch, Route } from "react-router-dom";

// Components
import { Home } from "./pages/Home/Home";

// CSS
import "./App.css";
import VisualizarPersonagem from "pages/VisualizarPersonagem/VisualizarPersonagem";
import AdicionarPersonagem from "pages/AdicionarPersonagem/AdicionarPersonagem";
import EditarPersonagem from "pages/EditarPersonagem/EditarPersonagem";
import RemoverPersonagem from "pages/RemoverPersonagem/RemoverPersonagem";
import Header from "components/structure/Header";
import GuardedRoute from "components/GuardedRoute/GuardedRoute";
import Login from "pages/Login/Login";

export function App() {
    const isAuthenticated = Boolean(localStorage.getItem("JWT"));

    return (
        <div className="App">
            <Header />

            <div className="content">
                <Switch>
                    <Route path="/" exact={true} component={Home} />

                    <Route path="/login" component={Login} />

                    <GuardedRoute
                        path="/personagem/adicionar"
                        component={AdicionarPersonagem}
                        auth={isAuthenticated}
                    />

                    <Route
                        path="/personagem/editar/:id"
                        component={EditarPersonagem}
                    />

                    <Route
                        path="/personagem/remover/:id"
                        component={RemoverPersonagem}
                    />

                    <Route
                        path="/personagem/:id"
                        component={VisualizarPersonagem}
                    />
                </Switch>
            </div>
        </div>
    );
}
