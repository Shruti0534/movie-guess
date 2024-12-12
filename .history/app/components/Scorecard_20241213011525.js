const Scoreboard = ({ level, score, stars }) => {
    return (
        <div className="w-full max-w-md bg-blue-50 rounded-lg shadow-md p-4 mb-6">
            <div className="flex justify-between items-center">
                <p className="text-lg font-semibold text-gray-800">Level: {level}</p>
                <p className="text-lg font-semibold text-gray-800">Score: {score}</p>
            </div>
            <div className="flex justify-center items-center mt-4">
                {[...Array(stars)].map((_, index) => (
                    <span key={index} className="text-yellow-400 text-xl mx-1">
                        ⭐
                    </span>
                ))}
            </div>
        </div>
    );
};

export default Scoreboard;
