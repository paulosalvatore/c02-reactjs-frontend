import { Api } from "api/Api";
import LinkButton from "components/utils/LinkButton";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";

// CSS
import "./VisualizarPersonagem.css";

export default function VisualizarPersonagem(props) {
    const id = props.match.params.id;

    const [personagem, setPersonagem] = useState(undefined);

    useEffect(() => {
        const loadData = async () => {
            const response = await Api.buildApiGetRequest(Api.readByIdUrl(id));

            const bodyResult = await response.json();

            setPersonagem(bodyResult);
        };

        loadData();
    }, []);

    if (!personagem) {
        return <div>Carregando...</div>;
    }

    return (
        <div className="personagem">
            <div className="personagem__buttons buttons">
                <LinkButton to="editar/1" className="buttons__button">
                    Editar
                </LinkButton>

                <LinkButton
                    to="remover/1"
                    className="buttons__button buttons__button--danger"
                >
                    Excluir
                </LinkButton>
            </div>

            <div className="personagem__details-wrapper">
                <h1 className="personagem__title">{personagem.nome} </h1>

                <div className="personagem__details">
                    <img
                        className="personagem__avatar"
                        src={personagem.imagemUrl}
                        alt={personagem.nome}
                        title={personagem.nome}
                    />

                    <p className="personagem__description">
                        {personagem.description || "Descrição em branco"}
                    </p>
                </div>
            </div>
        </div>
    );
}
