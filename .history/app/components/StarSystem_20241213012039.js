const StarSystem = ({ stars }) => {
    return (
        <div className="flex justify-center items-center mt-4">
            {[...Array(stars)].map((_, index) => (
                <span key={index} className="text-yellow-400 text-xl mx-1">
                    ⭐
                </span>
            ))}
        </div>
    );
};

export default StarSystem;
