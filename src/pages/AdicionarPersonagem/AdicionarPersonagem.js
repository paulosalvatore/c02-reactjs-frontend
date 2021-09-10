import { Api } from "api/Api";
import React from "react";

export default function AdicionarPersonagem(props) {
    const handleSubmit = async event => {
        event.preventDefault();

        const nome = event.target.nome.value;
        const imagemUrl = event.target.imagemUrl.value;

        const payload = {
            nome,
            imagemUrl,
            origemId: 1,
        };

        const response = await Api.buildApiPostRequest(
            Api.createUrl(),
            payload
        );

        const bodyResult = await response.json();

        props.history.push("/personagem/" + bodyResult.id);
    };

    return (
        <div className="adicionar">
            <form className="adicionar__form form" onSubmit={handleSubmit}>
                <label htmlFor="nome" className="form__label">
                    Nome:
                </label>
                <br />

                <input
                    type="text"
                    id="nome"
                    name="nome"
                    className="form__input"
                />

                <br />

                <label htmlFor="imagemUrl" className="form__label">
                    URL da Imagem:
                </label>
                <br />

                <input
                    type="text"
                    id="imagemUrl"
                    name="imagemUrl"
                    className="form__input"
                />

                <br />

                <input
                    type="submit"
                    value="Adicionar"
                    className="form__submit button button--success"
                />
            </form>
        </div>
    );
}
