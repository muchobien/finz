import Svg, { Path } from 'react-native-svg';
import type { InnerIconProps } from './types';

export const Home = ({
  size = 24,
  color = '#ffffff',
  filled,
  ...props
}: InnerIconProps) => (
  <Svg width={size} height={size} viewBox="0 0 24 24" fill="none" {...props}>
    {filled ? (
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M13.533.861a5.75 5.75 0 00-3.066 0c-.606.168-1.154.464-1.759.88-.592.406-1.279.955-2.151 1.653l-.023.018-2 1.6-.09.072c-1.017.813-1.643 1.314-2.1 1.944a5.75 5.75 0 00-.887 1.848c-.207.75-.207 1.552-.207 2.854V17A5.75 5.75 0 007 22.75 2.75 2.75 0 009.75 20v-4a2.25 2.25 0 014.5 0v4A2.75 2.75 0 0017 22.75 5.75 5.75 0 0022.75 17V11.73c0-1.302 0-2.103-.206-2.854a5.75 5.75 0 00-.889-1.848c-.457-.63-1.082-1.13-2.099-1.944l-.09-.072-2-1.6-.023-.018c-.872-.698-1.559-1.247-2.151-1.654-.605-.415-1.153-.711-1.759-.879z"
        fill={color}
      />
    ) : (
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M13.133 2.307a4.25 4.25 0 00-2.266 0c-.384.106-.776.304-1.31.67-.542.372-1.186.886-2.086 1.607l-2 1.6c-1.135.908-1.589 1.279-1.912 1.725a4.25 4.25 0 00-.656 1.365c-.147.532-.153 1.117-.153 2.571V17A4.25 4.25 0 007 21.25c.69 0 1.25-.56 1.25-1.25v-4a3.75 3.75 0 017.5 0v4c0 .69.56 1.25 1.25 1.25A4.25 4.25 0 0021.25 17v-5.155c0-1.454-.006-2.04-.153-2.57a4.25 4.25 0 00-.656-1.366c-.323-.446-.777-.817-1.912-1.725l-2-1.6c-.9-.72-1.544-1.235-2.086-1.607-.534-.366-.926-.564-1.31-.67zM10.467.861a5.75 5.75 0 013.066 0c.606.168 1.154.464 1.759.88.592.406 1.279.955 2.151 1.653l.023.018 2 1.6.09.072c1.017.813 1.642 1.314 2.1 1.944.404.558.704 1.184.888 1.848.206.75.206 1.552.206 2.854V17A5.75 5.75 0 0117 22.75 2.75 2.75 0 0114.25 20v-4a2.25 2.25 0 00-4.5 0v4A2.75 2.75 0 017 22.75 5.75 5.75 0 011.25 17v-5.155-.115c0-1.302 0-2.103.206-2.854a5.75 5.75 0 01.888-1.848c.457-.63 1.083-1.13 2.1-1.944l.09-.072 2-1.6.023-.018c.872-.698 1.559-1.247 2.151-1.654.605-.415 1.153-.711 1.759-.879z"
        fill={color}
      />
    )}
  </Svg>
);
