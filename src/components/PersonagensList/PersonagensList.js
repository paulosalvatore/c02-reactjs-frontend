import { useEffect, useState } from "react";
import { Api } from "../../api/Api";

export function PersonagensList() {
    const [personagens, setPersonagens] = useState([]);

    useEffect(() => {
        const loadData = async () => {
            const response = await Api.buildApiGetRequest(Api.readAllUrl());

            const bodyResult = await response.json();

            const results = bodyResult.results;

            setPersonagens(results);
        };

        loadData();
    }, []);

    return (
        <div>
            {personagens.map((personagem, index) => (
                <div key={"personagem_" + index}>{personagem.name}</div>
            ))}
        </div>
    );
}
