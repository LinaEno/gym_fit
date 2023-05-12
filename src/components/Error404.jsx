import { useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import bg from '../images/404.bg.png';
import number1 from '../images/4.1.png';
import number2 from '../images/0.png';
import number3 from '../images/4.2.png';
import moon from '../images/moon.png';
import cloud from '../images/cloud.png';

function PageNotFound404() {

  const navigate = useNavigate();

  useEffect(() => {
    const timerId = setTimeout(() => {
      navigate("/");
    }, 5000);

    return () => clearTimeout(timerId);
  }, [navigate]);

  return (
    <div>
          <div className="error__box">
              <img
                src={bg}
                alt="error"
                className="error__img"
              />
              <img
                src={number1}
                alt="4"
                className="number1"
              />
              <img
                src={number2}
                alt="0"
                className="number2"
              />
              <img
                src={number3}
                alt="4"
                className="number3"
              />
              <img
                src={moon}
                alt="moon"
                className="moon"
              />
              <img
                src={cloud}
                alt="cloud"
                className="cloud"
              />
          </div>
          <button className="error__button">
            <NavLink to={"/"} className="error__link">
              go back
            </NavLink>
          </button>
      </div>
  );
}

export default PageNotFound404;