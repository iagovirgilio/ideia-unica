import { useState } from 'react';

function Home() {
    return (
            <div>
                <h2>Home</h2>
                <CapsLock>me deixe em capslock, por favor!</CapsLock>
                <Contador/>
            </div>
        )
}

function CapsLock(props) {
    const textoInserido = props.children;
    const textoEmCapsLock = textoInserido.toUpperCase();
    return <div>{textoEmCapsLock}</div>
}

function Contador() {
    const [contador,setContador] = useState(1);

    function adicionarContador() {
        setContador(contador + 1);
    }

    return (
        <div>
            <div>{contador}</div>
            <button onClick={adicionarContador}>Adiciona</button>
        </div>
    )
}


export default Home