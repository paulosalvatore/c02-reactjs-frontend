import React from "react";

export default function VisualizarPersonagem() {
    return (
        <div className="personagem">
            <div className="personagem__buttons buttons">
                <button className="buttons__button">Editar</button>
                <button className="buttons__button buttons__button--danger">
                    Excluir
                </button>
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
