import { useState } from 'react';

export const useDate = () => {
  const [date] = useState(new Date());

  const options = { year: 'numeric', month: '2-digit', day: '2-digit' };
  const strDate = date.toLocaleString('ja-JP', options as Intl.DateTimeFormatOptions);

  function calcBetween(beforeDate: Date, afterDate: Date) {
    return Math.floor((afterDate.getTime() - beforeDate.getTime()) / (1000 * 60 * 60 * 24));
  }

  function parseStrDateToDate(dateStr: string):Date {
    const dateParts = dateStr.split("/");
    const year = parseInt(dateParts[0], 10);
    // 月は0~11で表現されるため、マイナス1を実行
    const month = parseInt(dateParts[1], 10) - 1
    const day = parseInt(dateParts[2], 10);
    return new Date(year, month, day)
  }
  
  function parseStrDateToOnlyStrDate(date: string):string{
    const parts = date.split("/");
    // 月の先頭の0を取り除く
    const month = parseInt(parts[1], 10).toString(); 
    return month+"/"+parts[2]
  }
  return { date, strDate, calcBetween , parseStrDateToDate, parseStrDateToOnlyStrDate};
};
