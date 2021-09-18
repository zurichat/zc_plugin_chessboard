import "./Numbers.css";

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

export default Numbers;
