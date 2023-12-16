import "./AgeForm.css";
import ArrowIcon from "../assets/arrow-icon.svg";
import { ChangeEvent, FormEvent, useState } from "react";

const AgeForm = () => {
  const [day, setDay] = useState<number | null>(null);
  const [month, setMonth] = useState<number | null>(null);
  const [year, setYear] = useState<number | null>(null);

  const [dayIsValid, setDayIsValid] = useState<boolean>(true);
  const [monthIsValid, setMonthIsValid] = useState<boolean>(true);
  const [yearIsValid, setYearIsValid] = useState<boolean>(true);

  const [dayIsRequired, setDayIsRequired] = useState<boolean>(true);
  const [monthIsRequired, setMonthIsRequired] = useState<boolean>(true);
  const [yearIsRequired, setYearIsRequired] = useState<boolean>(true);

  const checkLeapYear = (year: number): boolean => {
    if ((year % 4 == 0 && year % 100 != 0) || year % 400 == 0) {
      return true;
    }
    return false;
  };

  const checkDateValidity = (
    day: number,
    month: number,
    year: number
  ): boolean => {
    const currentDate = new Date();

    const currentDay = currentDate.getDate();
    const currentMonth = currentDate.getMonth() + 1;
    const currentYear = currentDate.getFullYear();

    let dayIsIncorrect = false;
    let monthIsIncorrect = false;
    let yearIsIncorrect = false;

    // year validity
    if (year > currentYear) {
      yearIsIncorrect = true;
    }

    // month validity
    if (!(month >= 1 && month <= 12)) {
      monthIsIncorrect = true;
    }

    // day validity
    if (month === 1) {
      if (!(day >= 1 && day <= 31)) {
        dayIsIncorrect = true;
      }
    } else if (month === 2 && checkLeapYear(year)) {
      if (!(day >= 1 && day <= 29)) {
        dayIsIncorrect = true;
      }
    } else if (month === 2 && !checkLeapYear(year)) {
      if (!(day >= 1 && day <= 28)) {
        dayIsIncorrect = true;
      }
    } else if (month === 3) {
      if (!(day >= 1 && day <= 31)) {
        dayIsIncorrect = true;
      }
    } else if (month === 4) {
      if (!(day >= 1 && day <= 30)) {
        dayIsIncorrect = true;
      }
    } else if (month === 5) {
      if (!(day >= 1 && day <= 31)) {
        dayIsIncorrect = true;
      }
    } else if (month === 6) {
      if (!(day >= 1 && day <= 30)) {
        dayIsIncorrect = true;
      }
    } else if (month === 7) {
      if (!(day >= 1 && day <= 31)) {
        dayIsIncorrect = true;
      }
    } else if (month === 8) {
      if (!(day >= 1 && day <= 31)) {
        dayIsIncorrect = true;
      }
    } else if (month === 9) {
      if (!(day >= 1 && day <= 30)) {
        dayIsIncorrect = true;
      }
    } else if (month === 10) {
      if (!(day >= 1 && day <= 31)) {
        dayIsIncorrect = true;
      }
    } else if (month === 11) {
      if (!(day >= 1 && day <= 30)) {
        dayIsIncorrect = true;
      }
    } else if (month === 12) {
      if (!(day >= 1 && day <= 31)) {
        dayIsIncorrect = true;
      }
    } else {
      if (!(day >= 1 && day <= 31)) {
        dayIsIncorrect = true;
      }
    }

    // complex validity
    if (currentYear === year && currentMonth < month) {
      monthIsIncorrect = true;
    }

    // more complex validity
    if (currentYear === year && currentMonth === month && currentDay < day) {
      dayIsIncorrect = true;
    }

    if (dayIsIncorrect) setDayIsValid(false);
    if (monthIsIncorrect) setMonthIsValid(false);
    if (yearIsIncorrect) setYearIsValid(false);

    return dayIsIncorrect && monthIsIncorrect && yearIsIncorrect ? false : true;
  };

  const submitHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!day || !month || !year) {
      if (!day) setDayIsRequired(false);
      if (!month) setMonthIsRequired(false);
      if (!year) setYearIsRequired(false);
      return;
    }

    if (checkDateValidity(day, month, year)) {
    }

    console.log(day, month, year);
  };

  const dayChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setDayIsRequired(true);
    setDayIsValid(true);
    setDay(parseInt(e.target.value));
  };

  const monthChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setMonthIsRequired(true);
    setMonthIsValid(true);
    setMonth(parseInt(e.target.value));
  };

  const yearChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setYearIsRequired(true);
    setYearIsValid(true);
    setYear(parseInt(e.target.value));
  };

  return (
    <>
      <form onSubmit={submitHandler}>
        <section className="form-inputs">
          <span className="form-input">
            <label
              htmlFor="day"
              className={`${!dayIsRequired || !dayIsValid ? "empty" : ""}`}
            >
              DAY
            </label>
            <input
              type="number"
              id="day"
              placeholder="DD"
              onChange={dayChangeHandler}
            />
            {!dayIsRequired && (
              <span className="empty resize">This field is required</span>
            )}
            {!dayIsValid && (
              <span className="empty resize">Must be a valid day.</span>
            )}
          </span>
          <span className="form-input">
            <label
              htmlFor="month"
              className={`${!monthIsRequired || !monthIsValid ? "empty" : ""}`}
            >
              MONTH
            </label>
            <input
              type="number"
              id="month"
              placeholder="MM"
              onChange={monthChangeHandler}
            />
            {!monthIsRequired && (
              <span className="empty resize">This field is required</span>
            )}
            {!monthIsValid && (
              <span className="empty resize">Must be a valid month.</span>
            )}
          </span>
          <span className="form-input">
            <label
              htmlFor="year"
              className={`${!yearIsRequired || !yearIsValid ? "empty" : ""}`}
            >
              YEAR
            </label>
            <input
              type="number"
              id="year"
              placeholder="YYYY"
              onChange={yearChangeHandler}
            />
            {!yearIsRequired && (
              <span className="empty resize">This field is required</span>
            )}
            {!yearIsValid && (
              <span className="empty resize">Must be in the past.</span>
            )}
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
