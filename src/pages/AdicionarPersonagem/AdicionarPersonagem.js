import React from "react";

export default function AdicionarPersonagem() {
    const handleSubmit = async event => {
        event.preventDefault();

        const nome = event.target.nome.value;
        const imagemUrl = event.target.imagemUrl.value;

        const payload = {
            nome,
            imagemUrl,
        };

        console.log(payload);

        // TODO: Requisição POST para a API

        // TODO: Redirecionar para página de visualização
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

                <label htmlFor="urlImagem" className="form__label">
                    URL da Imagem:
                </label>
                <br />

                <input
                    type="text"
                    id="urlImagem"
                    name="urlImagem"
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
