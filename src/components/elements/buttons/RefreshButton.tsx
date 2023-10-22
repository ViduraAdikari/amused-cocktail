"use client"

import React, {PropsWithChildren, ReactNode} from "react";
import Button from "@mui/material/Button";
import AutorenewOutlinedIcon from "@mui/icons-material/AutorenewOutlined";

type RefreshButtonProps = {
  /** variant of the button */
  variant: 'primary' | 'secondary' | 'territory',
  /** size of the button */
  size?: 'small' | 'medium' | 'large'
  /** child nodes */
  children: ReactNode,
  /** onClick handler of the button */
  onClick?: () => void
}

const RefreshButton: React.FC<RefreshButtonProps> = (props: PropsWithChildren<RefreshButtonProps>) => {

  const {
    variant,
    size,
    children,
    onClick
  } = props;

  const buttonVariant = variant === "primary" ? "contained" :
    variant === 'secondary' ? "outlined" : "text";

  const handleClick = () => {
    onClick && onClick();
  }

  return (
    <Button variant={buttonVariant}
            size={size ? size : "medium"}
            startIcon={<AutorenewOutlinedIcon/>}
            title="refresh to get new data"
            onClick={handleClick}>
      {children}
    </Button>
  );
};

export default RefreshButton;
