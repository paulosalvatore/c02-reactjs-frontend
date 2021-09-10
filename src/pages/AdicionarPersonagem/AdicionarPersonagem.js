import { Api } from "api/Api";
import React from "react";
import { useEffect, useState } from "react";

export default function AdicionarPersonagem(props) {
    const [localizacoes, setLocalizacoes] = useState([]);

    useEffect(() => {
        const loadData = async () => {
            const response = await Api.buildApiGetRequest(Api.readAllUrl());

            const bodyResult = await response.json();

            setLocalizacoes(bodyResult);
        };

        loadData();
    }, []);

    const handleSubmit = async event => {
        event.preventDefault();

        const nome = event.target.nome.value;
        const imagemUrl = event.target.imagemUrl.value;
        const origemId = +event.target.origemId.value;

        const payload = {
            nome,
            imagemUrl,
            origemId,
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

                <label htmlFor="origemId" className="form__label">
                    Origem:
                </label>
                <br />

                <select id="origemId" name="origemId">
                    <option value="">Selecione uma opção</option>

                    {localizacoes.map((localizacao, index) => (
                        <option
                            key={"localizacao_" + index}
                            value={localizacao.id}
                        >
                            {localizacao.nome}
                        </option>
                    ))}
                </select>

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
