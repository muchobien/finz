import type { ViewProps } from 'react-native';
import type { GProps, SvgProps } from 'react-native-svg';
import type { IconName } from './constants';

export interface InnerIconProps
  extends GProps,
    ViewProps,
    Pick<SvgProps, 'viewBox' | 'preserveAspectRatio' | 'title'> {
  color?: SvgProps['color'];
  filled?: boolean;
  size?: number;
}

export interface IconProps extends InnerIconProps {
  name: IconName;
}
