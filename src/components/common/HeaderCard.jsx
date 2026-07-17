function HeaderCard({ header }) {
    return(
        <div className="p-1 px-2 flex items-center">
            <div className="w-2 h-2 bg-red-400 mr-2"></div>
            <div className="w-2 h-2 bg-yellow-400 mr-2"></div>
            <div className="w-2 h-2 bg-green-400 mr-4"></div>
            <div><span className="text-gray-600">{ header }</span></div>
        </div>
    );
}

export default HeaderCard;