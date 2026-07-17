function Button({ texto, cor_fundo, color, border, margin, width }) {
    const estilos = {
        backgroundColor: cor_fundo,
        color: color,
        border: border,
        width: width,
        margin: margin
    };
    return(
        <button className="px-4 py-1 font-bold" style= { estilos }>
            { texto }
        </button>
    );
}

export default Button;

