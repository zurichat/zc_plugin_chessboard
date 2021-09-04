import Gamesection from "./gamesection";

const Games = () => {
    return (
        <div
            style={{
                width: "100%",
                height: "100%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
            }}
        >
            <h1>Games Component</h1>
            <Gamesection />
        </div>
    );
};

export default Games;
