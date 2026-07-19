function Title({ id, texto }) {
    return(
        <h2 className="text-green-400 flex text-[2.5vh] mr-0.5 mb-6 pt-4 border-t border-green-400">
            <div className="border-2 border-green-400 px-1">{ id }</div>
            <div className="font-bold text-2xl text-white">
                <span>
                ./
                <span>
                    { texto }
                </span>
            </span>
            </div>
        </h2>
    );
}

export default Title;