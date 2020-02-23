import React from "react";
import "./CV.scss";

const CV = () => {
  return (
    <div className="CV">
      <div>ФИО: Семак Александр Сергеевич.</div>
      <div> Рожден: 10.06.1988г (30 лет).</div>
      <ul>
        <li> Skype: kamesas1</li>
        <li> Телефон: +38 (099) 770 81 64</li>
        <li> Email: semakaleksandr2014@gmail.com</li>
        <li> GitHub: https://github.com/Kamesas</li>
      </ul>
      <div>
        Образование:
        <ul>
          <li>школа - ОСШ I-III ступеней;</li>
          <li>колледж - Запорожский медицинский колледж (фельдшер);</li>
          <li>
            университет - Запорожский национальный университет (реабилитолог)
          </li>
        </ul>
      </div>
      <div>
        Знаю:
        <ul>
          <li>JavaScript, TypeScript</li>
          <li>React, Redux, Mobx, Gatsby</li>
          <li>HTML, CSS, SASS, Bootstrap</li>
        </ul>
      </div>
    </div>
  );
};

export default CV;
