import React from "react";

import { Container } from "./styles";

interface Props {
  type: string;
  value: string;
  className?: string;
  children?: React.ReactNode;
}

const Button: React.FC<Props> = ({ type, value, className, children }) => {
  return (
    <Container type={type} className={className} value={value}>
      {children ? children : ""}
    </Container>
  );
};

export default Button;
