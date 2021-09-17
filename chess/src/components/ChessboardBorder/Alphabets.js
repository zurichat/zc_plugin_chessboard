import "./Alphabets.css";

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

export default Alphabets;
