import { db } from "./workout-ec6f3-export";

const copyDb = db;
const dates = [];
let newDB = {};
Object.keys(copyDb.Kamesas).forEach(item => {
  if (!dates.includes(copyDb.Kamesas[`${item}`].date)) {
    dates.push(copyDb.Kamesas[`${item}`].date);
    newDB[`${item}`] = { date: `${copyDb.Kamesas[`${item}`].date}` };
  }
});

Object.keys(copyDb.Kamesas).forEach(item => {
  Object.keys(newDB).forEach(entity => {
    if (copyDb.Kamesas[item].date === newDB[entity].date) {
      //pushUps
      if (copyDb.Kamesas[item].exercise === "отжимания") {
        if (!newDB[entity].pushUps) {
          newDB[entity] = {
            ...newDB[entity],
            pushUps: [
              {
                numberOfItems: copyDb.Kamesas[item].numberOfTimes,
                time: copyDb.Kamesas[item].time
              }
            ]
          };
        } else {
          newDB[entity] = {
            ...newDB[entity],
            pushUps: [
              ...newDB[entity].pushUps,
              {
                numberOfItems: copyDb.Kamesas[item].numberOfTimes,
                time: copyDb.Kamesas[item].time
              }
            ]
          };
        }
      }

      //pull ups

      if (copyDb.Kamesas[item].exercise === "подтягивания") {
        if (!newDB[entity].pullUps) {
          newDB[entity] = {
            ...newDB[entity],
            pullUps: [
              {
                numberOfItems: copyDb.Kamesas[item].numberOfTimes,
                time: copyDb.Kamesas[item].time
              }
            ]
          };
        } else {
          newDB[entity] = {
            ...newDB[entity],
            pullUps: [
              ...newDB[entity].pullUps,
              {
                numberOfItems: copyDb.Kamesas[item].numberOfTimes,
                time: copyDb.Kamesas[item].time
              }
            ]
          };
        }
      }

      // squats
      if (copyDb.Kamesas[item].exercise === "присед") {
        if (!newDB[entity].squats) {
          newDB[entity] = {
            ...newDB[entity],
            squats: [
              {
                numberOfItems: copyDb.Kamesas[item].numberOfTimes,
                time: copyDb.Kamesas[item].time
              }
            ]
          };
        } else {
          newDB[entity] = {
            ...newDB[entity],
            squats: [
              ...newDB[entity].squats,
              {
                numberOfItems: copyDb.Kamesas[item].numberOfTimes,
                time: copyDb.Kamesas[item].time
              }
            ]
          };
        }
      }
    }
  });
});

// console.log(newDB);
// localStorage.setItem("top", JSON.stringify(newDB));
