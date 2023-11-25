import "./AgeForm.css";
import ArrowIcon from "../assets/arrow-icon.svg";

const AgeForm = () => {
  return (
    <>
      <form>
        <section className="form-inputs">
          <span className="form-input">
            <label htmlFor="day">DAY</label>
            <input type="number" id="day" />
          </span>
          <span className="form-input">
            <label htmlFor="month">MONTH</label>
            <input type="number" id="month" />
          </span>
          <span className="form-input">
            <label htmlFor="year">YEAR</label>
            <input type="number" id="year" />
          </span>
        </section>
        <button>
          <img src={ArrowIcon} alt="arrow-icon" />
        </button>
      </form>
    </>
  );
};

export default AgeForm;
