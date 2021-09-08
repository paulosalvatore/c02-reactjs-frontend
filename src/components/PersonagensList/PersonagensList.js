import React from "react";
import { useEffect, useState } from "react";
import { Api } from "../../api/Api";

export function PersonagensList() {
    const [personagens, setPersonagens] = useState([]);

    useEffect(() => {
        const loadData = async () => {
            const response = await Api.buildApiGetRequest(Api.readAllUrl());

            const bodyResult = await response.json();

            setPersonagens(bodyResult);
        };

        loadData();
    }, []);

    return (
        <div>
            {personagens.map((personagem, index) => (
                <div key={"personagem_" + index}>{personagem.nome}</div>
            ))}
        </div>
    );
}
