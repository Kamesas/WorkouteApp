import React, { useState, useEffect } from "react";
import dayjs from "dayjs";

interface IProps {
  [key: string]: any;
}

const exercises = [
  { title: "Push ups", alias: "pushUps" },
  { title: "Pull ups", alias: "pullUps" },
  { title: "Knee bend", alias: "kneeBend" }
];

const Main: React.FC<IProps> = () => {
  const [data, setData] = useState();
  const [valueAmount, setValueAmount] = useState<string>("");
  const [selectedExercise, setExercise] = useState<string>("pushUps");
  const [currDayId, setSetCurrDayID] = useState<string>("");

  useEffect(() => {
    getData();
  }, []);

  useEffect(() => {
    console.log(data);
    console.log(currDayId);
  }, [data, currDayId]);

  async function getData() {
    console.log("GEEEEEEEEEEEEEETTTTT");
    try {
      let response = await fetch(
        "https://workout-ec6f3.firebaseio.com/Test.json"
      );
      let responseJson = await response.json();
      setData(responseJson);
      const newcurrDayId =
        responseJson &&
        Object.keys(responseJson).find((item: any) => {
          console.log(responseJson[item].date, dayjs().format("DD MM YYYY"));
          return responseJson[item].date === dayjs().format("DD MM YYYY");
        });

      newcurrDayId && setSetCurrDayID(newcurrDayId);

      console.log(responseJson);
    } catch (error) {
      console.error(error);
    }
  }

  const createNewData = (selectedExercise: string) => {
    console.log("data ===>", data);
    if (!data) {
      const newData = {
        date: dayjs().format("DD MM YYYY"),
        [`${selectedExercise}`]: [
          { numberOfItems: +valueAmount, time: dayjs().format("HH:mm:ss") }
        ]
      };

      postData(newData);
      getData();
      return;
    }

    console.log("before currDayId => ", currDayId);

    if (currDayId) {
      console.log("data[currDayId]", currDayId, data);
      console.log("data[currDayId] =====> ", data[currDayId]);

      if (data[currDayId].hasOwnProperty(selectedExercise)) {
        console.log(data[currDayId].hasOwnProperty(selectedExercise));

        const newData = data[currDayId];
        // newData[`${selectedExercise}`] = [
        //   ...newData[`${selectedExercise}`],
        //   {
        //     numberOfItems: +valueAmount,
        //     time: dayjs().format("HH:mm:ss")
        //   }
        // ];
        // const newData = {
        //   ...data,
        //   [`${selectedExercise}`]: [
        //     ...data[currDayId][`${selectedExercise}`],
        //     {
        //       numberOfItems: +valueAmount,
        //       time: dayjs().format("HH:mm:ss")
        //     }
        //   ]
        // };

        updateData(newData, currDayId);
        getData();
      }
    }
  };

  async function updateData(data: any, key: string) {
    // const data = { workout: [{ data: new Date(), exercise: "pull ups" }] };
    console.log("update ===> ", data, key);
    // try {
    //   let response = await fetch(
    //     `https://workout-ec6f3.firebaseio.com/Test/${key}.json`,
    //     {
    //       method: "PUT",
    //       body: JSON.stringify(data)
    //     }
    //   );
    //   let responseJson = await response.json();
    //   localStorage.setItem("w", JSON.stringify(responseJson));
    //   setData(responseJson);
    // } catch (error) {
    //   console.error(error);
    // }
  }

  async function postData(data: any) {
    // const data = { workout: [{ data: new Date(), exercise: "pull ups" }] };
    try {
      let response = await fetch(
        `https://workout-ec6f3.firebaseio.com/Test/.json`,
        {
          method: "POST",
          body: JSON.stringify(data)
        }
      );
      let responseJson = await response.json();
      localStorage.setItem("w", JSON.stringify(responseJson));
      setData(responseJson);
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div className="Main">
      <div>
        {exercises.map(item => {
          return (
            <div key={item.alias} onClick={() => setExercise(item.alias)}>
              {item.title}
            </div>
          );
        })}
      </div>
      <input
        type="text"
        value={valueAmount}
        onChange={({ target: { value } }) => setValueAmount(value)}
      />
      <button onClick={() => createNewData(selectedExercise)}>add</button>

      {selectedExercise}
    </div>
  );
};

export default Main;
