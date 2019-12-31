import React, { useState } from "react";
import { FaChevronCircleDown, FaChevronCircleUp } from "react-icons/fa";
import "./Exercise.scss";

interface IProps {
  [key: string]: any;
}

const Exercise: React.FC<IProps> = ({ exerciseName, exercisesData }) => {
  const [showDetails, setShowDetails] = useState<boolean>(false);

  const renderValue = () => {
    let sum: any = 0;

    const list = exercisesData.map((val: any, i: number) => {
      sum += +val.numberOfItems;
      return (
        <div key={i} className="Exercise-listItem">
          <span className="Exercise-listItem-numberOfItems">
            {val.numberOfItems}
          </span>
          <span className="Exercise-listItem-time">{val.time}</span>
        </div>
      );
    });

    return {
      list,
      sum
    };
  };

  return (
    <div className="Exercise">
      <div
        className="Exercise-header"
        onClick={() => setShowDetails(!showDetails)}
      >
        {showDetails ? (
          <FaChevronCircleUp className="Exercise-shewron" />
        ) : (
          <FaChevronCircleDown className="Exercise-shewron" />
        )}
        <span className="Exercise-title">{exerciseName}</span>
        <span className="Exercise-sum">
          {renderValue().list.length} / {renderValue().sum}
        </span>
      </div>

      {showDetails && <div className="Exercise-list">{renderValue().list}</div>}
    </div>
  );
};

export default Exercise;
