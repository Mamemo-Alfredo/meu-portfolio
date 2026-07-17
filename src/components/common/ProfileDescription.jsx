function ProfileDescription( {description, value} ) {
    return(
        <div>
            <hr className="border-green-800" />

            <div className="flex justify-between">
                <div><span className="text-gray-400 font-bold text-center"> { description } </span></div>
                <div><span className="text-green-400 font-bold text-center"> { value } </span></div>
            </div>
        </div>
    );
}

export default ProfileDescription;