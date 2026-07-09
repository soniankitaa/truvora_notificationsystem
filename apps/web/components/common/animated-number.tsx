"use client";

import CountUp from "react-countup";

interface AnimatedNumberProps {
  value: number;
  prefix?: string;
  suffix?: string;
}

export default function AnimatedNumber({
  value,
  prefix = "",
  suffix = "",
}: AnimatedNumberProps) {
  return (
    <CountUp
      start={0}
      end={value}
      duration={2}
      separator=","
      prefix={prefix}
      suffix={suffix}
    />
  );
}