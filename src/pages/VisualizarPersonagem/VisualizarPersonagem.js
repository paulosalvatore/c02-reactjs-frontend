import LinkButton from "components/utils/LinkButton";
import React from "react";

// CSS
import "./VisualizarPersonagem.css";

export default function VisualizarPersonagem() {
    return (
        <div className="personagem">
            <div className="personagem__buttons buttons">
                <LinkButton to="/editar/1" className="buttons__button">
                    Editar
                </LinkButton>

                <LinkButton
                    to="/remover/1"
                    className="buttons__button buttons__button--danger"
                >
                    Excluir
                </LinkButton>
            </div>

            <div className="personagem__details-wrapper">
                <h1 className="personagem__title">Rick Sanchez</h1>

                <div className="personagem__details">
                    <img
                        className="personagem__avatar"
                        src="https://rickandmortyapi.com/api/character/avatar/1.jpeg"
                        alt="Rick Sanchez"
                        title="Rick Sanchez"
                    />

                    <p className="personagem__description">
                        Informações sobre o Rick Sanchez
                    </p>
                </div>
            </div>
        </div>
    );
}
