import React from "react";
import { Link } from "react-router-dom";

export default function PersonagensCard({ personagem }) {
    // export default function PersonagensCard(props) {
    // const personagem = props.personagem;
    // const { personagem } = props;

    return (
        <Link to={"/personagem/" + personagem.id}>
            <div className="card">
                <h1 className="card__title">{personagem.nome}</h1>
                <img
                    src={personagem.imagemUrl}
                    alt={personagem.nome}
                    width="200"
                />
            </div>
        </Link>
    );
}
