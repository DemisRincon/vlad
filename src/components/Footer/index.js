import React from 'react';
import {Description} from './styled';
import {CustomText} from '../syled';

export const Footer = ({
  h,
  w,
  fzTitle,
  fzSubtitle,
  title,
  text,
  top,
  borderRadiusR,
  borderRadiusL,
  children,
}) => {
  return (
    <Description
      h={h}
      w={w}
      t={top}
      borderRadiusL={borderRadiusL}
      borderRadiusR={borderRadiusR}>
      <CustomText fz={fzTitle} fw="bold">
        {title}
      </CustomText>
      <CustomText fz={fzSubtitle} fw="bold" op="0.5">
        {text}
      </CustomText>
      {children}
    </Description>
  );
};
