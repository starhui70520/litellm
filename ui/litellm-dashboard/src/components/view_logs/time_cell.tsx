import * as React from "react";

interface TimeCellProps {
  utcTime: string;
}

const getLocalTime = (utcTime: string): string => {
  try {
    const date = new Date(utcTime);
    return date
      .toLocaleString("zh-CN", {
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: true,
      })
      .replace(",", "");
  } catch (e) {
    return "时间转换错误";
  }
};

export const TimeCell: React.FC<TimeCellProps> = ({ utcTime }) => {
  return (
    <span
      style={{
        fontFamily: "monospace",
        width: "180px",
        display: "inline-block",
      }}
    >
      {getLocalTime(utcTime)}
    </span>
  );
};

export const getTimeZone = (): string => {
  return Intl.DateTimeFormat().resolvedOptions().timeZone;
};
