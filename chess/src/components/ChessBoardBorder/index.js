// Import CSS for this page
import "./chessboardborder.css";

const Alphabets = () => {
  return (
    <section id="alphabets">
      <div className="wrapper">
        {[..."abcdefgh"].map((item, ind) => {
          return (
            <div className="letters" key={ind}>
              {item.toUpperCase()}
            </div>
          );
        })}
      </div>
    </section>
  );
};

const Numbers = () => {
  return (
    <section id="numbers">
      <div className="wrapper">
        {[..."87654321"].map((item, ind) => {
          return (
            <div className="digit" key={ind}>
              {item}
            </div>
          );
        })}
      </div>
    </section>
  );
};

const ChessBoardBorder = () => {
  const borderStyles = {
    top: {
      width: "100%",
      height: "15px",
      top: "-15px",
      position: "absolute",
    },
    bottom: {
      width: "100%",
      height: "15px",
      bottom: "-15px",
      position: "absolute",
    },
    left: {
      top: "0px",
      width: "15px",
      height: "100%",
      left: "-15px",
      position: "absolute",
    },
    right: {
      top: "0",
      width: "15px",
      height: "100%",
      right: "-15px",
      position: "absolute",
    },
  };

  return (
    <section
      style={{
        position: "absolute",
        top: "-16px",
        left: "-16px",
        bottom: "-16px",
        right: "-16px",
        border: "15px solid #3D2F19",
        // background:"#554223",
        zIndex: "-1",
      }}
    >
      <div style={borderStyles.top}>
        <Alphabets />
      </div>
      <div style={borderStyles.left}>
        <Numbers />
      </div>
      <div style={borderStyles.right}>
        <Numbers />
      </div>
      <div style={borderStyles.bottom}>
        <Alphabets />
      </div>
    </section>
  );
};

export default ChessBoardBorder;
