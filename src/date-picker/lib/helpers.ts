import { DateCell } from "./types";

/** Получаем количество дней в следующем месяце */
export const getDaysAmountInAMonth = (year: number, month: number) => {
  const nextMonthDay = new Date(year, month + 1, 1);
  nextMonthDay.setMinutes(-1);
  return nextMonthDay.getDate();
};

/** Получение количества дней в след месяце */
export const getNextMonthDays = () => {};

/** Получение количества дней в пред месяце */
export const getPrevMonthDays = (year: number, month: number) => {};

/** Получение количества дней в текущем месяце */
export const getCurrentMonthDays = (
  year: number,
  month: number,
  numberOfDays: number
) => {
  const dateCell: DateCell[] = [];

  for (let i = 0; i < numberOfDays; i++) {
    dateCell.push({ year, month, day: i });
  }

  return dateCell;
};
