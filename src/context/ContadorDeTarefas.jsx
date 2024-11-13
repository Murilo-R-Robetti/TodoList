import React, { createContext, useState } from 'react';


export const contadorTarefasCriadas =createContext();

export function contadorTarefasCriadas({children}){

    const [contador, setContador] = useState(0);
    const [conta, setConta] = useState(1);

    const contagem = () => {setContador(contador + conta)}}

    const desconto = () => { setConta (conta - 1)};

    return (
        <contadorTarefasCriadas.Provider value={{ contar, descontar}}>
            {children}
        </contadorTarefasCriadas.Provider>
    )
