import { rem } from 'polished';
import React, { useState } from "react";
import { css } from '@emotion/react';
import styled from "@emotion/styled";
import styles from './styles';

const filterArray: string[] = ["Tout", "Alimentaire", "Mode", "Service", "Hygiène et beauté", "Maison et divers"];

interface FiltresProps {
  selected: string;
  update: Function;
}

const Div = styled('div')`${styles.filtre}`;

const P = styled('p')(props => css`
  font-size: ${rem(14)};
`);

const Filtres: React.FC<FiltresProps> = ({ selected, update }) => {
  return (
    <Div>
      {filterArray.map((filtre) => {
        const className = filtre == selected ? "filtre filtreSelected" : "filtre";
        return (
          <div className={className} onClick={() => update(filtre)}>
            <P>{filtre}</P>
          </div>
        );
      })}
    </Div>
  );
};

export default Filtres;
