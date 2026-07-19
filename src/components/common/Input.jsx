function Input( { label, tamanho, type } ) {
    const estilos = {
        width: tamanho
    };
    return(
        <div className="w-full">
            <label className="text-green-400 font-bold">{ label }</label> 
            <br />
            <input type={ type } className="border border-green-800 mb-3 text-gray-400 p-1" style={ estilos } />
        </div>
    );
}

export default Input;