import { useMemo, useState } from "react";
import { months } from "./lib/consts";
import { getDaysAmountInAMonth } from "./lib/helpers";
import { DateCell } from "./lib/types";

interface Props {
  value: Date;
  onChange: (value: Date) => void;
  min?: Date;
  max?: Date;
}

export const DatePicker = (props: Props) => {
  const { value, onChange } = props;

  const [panelYear] = useState(() => value.getFullYear());
  const [panelMonth] = useState(() => value.getFullYear());

  const [day, month, year] = useMemo(() => {
    const currentYear = value.getFullYear();
    const currentMonth = months[value.getMonth()].RU;
    const currentDay = value.getDate();

    return [currentDay, currentMonth, currentYear];
  }, [value]);

  const dateCells = useMemo(() => {
    const items: DateCell[] = [];

    const daysInMonth = getDaysAmountInAMonth(panelYear, panelMonth);

    console.log(daysInMonth);
    

    return items;
  }, [panelMonth, panelYear]);

  const nextMonth = () => {};
  const prevMonth = () => {};
  const nextYear = () => {};
  const prevYear = () => {};

  return (
    <div>
      DatePicker
      <div>
        {day} {month} {year}
      </div>
    </div>
  );
};
