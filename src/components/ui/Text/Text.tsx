/** @format */
import clsx from "clsx";
import React, { FC, PropsWithChildren } from "react";
import classes from "./styles.module.scss";

type Props = {
  color?: "red" | "green" | "white";
  className?: string;
};

const Text: FC<PropsWithChildren<Props>> = ({
  children,
  className,
  color = "white",
}) => {
  return (
    <span style={{ color }} className={clsx(classes.text, className)}>
      {children}
    </span>
  );
};

export default Text;
