import React from "react";
import "./CV.scss";

const CV = () => {
  const birthday = "1988/06/10";
  function getAge(dateString: string) {
    var today = new Date();
    var birthDate = new Date(dateString);
    var age = today.getFullYear() - birthDate.getFullYear();
    var m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }
    return age;
  }

  return (
    <div className="CV">
      <div className="CV-title">Semak Alexandr</div>
      <div className="CV-birthday">10.06.1988 ({getAge(birthday)} years)</div>
      <div className="CV-expirience">
        Work experience in web-dev more than a year
      </div>

      <hr />
      <div className="CV-contacts">
        <div className="CV-contacts-title">Contacts:</div>
        <ul className="CV-contacts-list">
          <li className="CV-contacts-item">
            <span className="fieldType">Skype:</span> kamesas1
          </li>
          <li className="CV-contacts-item">
            <span className="fieldType">Tel:</span> +38 (099) 770 81 64
          </li>
          <li className="CV-contacts-item">
            <span className="fieldType">Email: </span>
            semakaleksandr2014@gmail.com
          </li>
          <li className="CV-contacts-item">
            <span className="fieldType">GitHub: </span>
            <a
              href=" https://github.com/Kamesas"
              target="_blanck"
              className="CV-contacts-link"
            >
              github.com/Kamesas
            </a>
          </li>
        </ul>
      </div>

      <div className="CV-education">
        <div className="CV-education-title"> Education:</div>
        <ul className="CV-education-list">
          <li className="CV-education-item">School for grades 1-11</li>
          <li className="CV-education-item">
            <a
              href="https://www.znu.edu.ua/frontpage/3594.eng.html"
              target="_blanck"
              className="CV-education-link"
            >
              Zaporizhzhia National University (Faculty of Physical Education)
            </a>
          </li>
        </ul>
      </div>

      <div className="CV-skills">
        <div className="CV-skills-title">Skills:</div>
        <ul className="CV-skills-list">
          <li className="CV-skills-item">JavaScript, TypeScript</li>
          <li className="CV-skills-item">React, Redux, Mobx, Gatsby</li>
          <li className="CV-skills-item">HTML, CSS, SASS, Bootstrap</li>
        </ul>
      </div>
    </div>
  );
};

export default CV;
