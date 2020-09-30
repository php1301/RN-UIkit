import React, { FC } from 'react';
import { Image as NativeImage, ImageProps } from 'react-native';
import { styleFlexBox, styleSpace, styleShadow } from './helpers';

interface Props extends ImageProps {}

const Image: FC<Props> = ({ style, ...props }) => {
  const blockStyles = [
    [...styleSpace(props)],
    [...styleFlexBox(props)],
    [...styleShadow(props)],
    style,
  ];
  return React.createElement(NativeImage, {
    style: blockStyles,
    ...props,
  });
};

export default Image;
