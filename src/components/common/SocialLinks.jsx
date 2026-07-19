function SocialLinks( { valor, link } ) {
    return(
        <button className="border border-green-400 text-green-400 p-1 px-2 mr-1">
            <a href={ link }>{ valor }</a>
        </button>
    );
}

export default SocialLinks;