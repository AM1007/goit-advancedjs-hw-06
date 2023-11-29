/*
 Create a function (isWeekend) that takes a day of the week (from your enum) and returns a boolean value indicating whether it's a working day or a weekend.
*/

enum DaysOfWeek {
  Monday,
  Tuesday,
  Wednesday,
  Thursday,
  Friday,
  Saturday,
  Sunday,
}

function isWeekend(day: DaysOfWeek): boolean {
  return day === DaysOfWeek.Saturday || day === DaysOfWeek.Sunday;
}

const isMondayWeekend = isWeekend(DaysOfWeek.Monday);
console.log(`Is Monday a weekend day? ${isMondayWeekend ? 'No' : 'Yes'}`);
