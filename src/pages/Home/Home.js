import LinkButton from "components/utils/LinkButton";
import React from "react";
import { PersonagensList } from "../../components/PersonagensList/PersonagensList";

export function Home() {
    return (
        <div className="home">
            <div className="buttons">
                <LinkButton
                    to="personagem/adicionar"
                    className="buttons__button buttons__button--success"
                >
                    Adicionar
                </LinkButton>
            </div>

            <PersonagensList></PersonagensList>
        </div>
    );
}
