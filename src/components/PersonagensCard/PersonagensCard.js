import React from "react";

export default function PersonagensCard({ personagem }) {
    // export default function PersonagensCard(props) {
    // const personagem = props.personagem;
    // const { personagem } = props;

    return (
        <div className="card">
            <h1 className="card__title">{personagem.nome}</h1>
            <img src={personagem.imagemUrl} alt={personagem.nome} width="200" />
        </div>
    );
}
