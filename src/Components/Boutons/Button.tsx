import React from "react";
import { styles } from "./styles";
import { rem } from 'polished'
import styled from "@emotion/styled";
const filterArray : string[]= ["Tout","Alimentaire","Mode","Service","Hygiène et beauté","Maison et divers"]
const Button = styled('button')`
  ${styles.button}
`;

interface FiltresProps {
  title: string;
}

const PrimaryButton: React.FC<FiltresProps> = ({ title }) => {
  return (
    <Button>
      {title}
    </Button>
  );
};

export default PrimaryButton;
