import { withTheme } from '@emotion/react';
import Svg, { Path } from 'react-native-svg';
import type { InnerIconProps } from './types';

export const Receipt = withTheme(
  ({ size = 24, color = 'white', theme, filled, ...props }: InnerIconProps) => (
    <Svg width={size} height={size} viewBox="0 0 24 24" fill="none" {...props}>
      {filled ? (
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M10.866 1.024a2.75 2.75 0 00-1.732 0 2.792 2.792 0 00-.79.435 16.6 16.6 0 00-.828.682l-.019.017c-.546.468-.7.588-.853.653a1.25 1.25 0 01-.623.09c-.165-.017-.346-.088-1.004-.38L2.305 1.314A.75.75 0 001.25 2v13.633c0 1.092 0 1.958.057 2.655.058.714.18 1.317.46 1.869a4.75 4.75 0 002.077 2.075c.55.281 1.154.403 1.868.461.697.057 1.563.057 2.655.057H20A2.75 2.75 0 0022.75 20v-4.83c0-.535 0-.98-.03-1.345-.03-.38-.098-.736-.27-1.073a2.751 2.751 0 00-1.201-1.202c-.338-.172-.694-.24-1.074-.27-.365-.03-.81-.03-1.345-.03h-.08V2a.75.75 0 00-1.055-.685L14.983 2.52c-.658.293-.839.364-1.004.382a1.25 1.25 0 01-.623-.091c-.154-.065-.306-.185-.853-.653l-.02-.017c-.32-.275-.59-.506-.826-.682a2.792 2.792 0 00-.791-.435zM21.25 20a1.25 1.25 0 11-2.5 0v-7.25h.05c.572 0 .957 0 1.252.025.288.023.425.065.515.111.236.12.427.311.547.546.046.091.088.228.111.515.024.296.025.68.025 1.253V20zM7 8.25a.75.75 0 000 1.5h4a.75.75 0 000-1.5H7zM9.25 13a.75.75 0 01.75-.75h3a.75.75 0 010 1.5h-3a.75.75 0 01-.75-.75zm.75 3.25a.75.75 0 000 1.5h3a.75.75 0 000-1.5h-3zM8 13a1 1 0 11-2 0 1 1 0 012 0zm-1 5a1 1 0 100-2 1 1 0 000 2z"
          fill={theme.colors[color]}
        />
      ) : (
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M9.134 1.024a2.75 2.75 0 011.732 0c.292.097.543.25.79.435.237.176.507.407.828.682l.019.017c.546.468.7.588.853.653.196.083.41.114.623.09.165-.017.346-.088 1.004-.38l2.712-1.206A.75.75 0 0118.75 2v9.25h.08c.535 0 .98 0 1.345.03.38.03.736.098 1.073.27.518.263.939.684 1.202 1.201.172.338.24.694.27 1.074.03.365.03.81.03 1.345V20A2.75 2.75 0 0120 22.75H8.367c-1.092 0-1.958 0-2.655-.057-.714-.058-1.317-.18-1.868-.46a4.75 4.75 0 01-2.076-2.076c-.281-.552-.403-1.155-.461-1.869-.057-.697-.057-1.563-.057-2.655V2a.75.75 0 011.055-.685L5.017 2.52c.658.293.839.364 1.004.382a1.25 1.25 0 00.623-.091c.154-.065.306-.185.853-.653l.02-.017a16.6 16.6 0 01.826-.682c.248-.184.499-.338.791-.435zM20 21.25c.69 0 1.25-.56 1.25-1.25v-4.8c0-.572 0-.957-.025-1.252-.023-.288-.065-.425-.111-.516a1.25 1.25 0 00-.547-.546c-.09-.046-.227-.088-.515-.111-.295-.024-.68-.025-1.252-.025h-.05V20c0 .69.56 1.25 1.25 1.25zm-2.45 0H8.4c-1.132 0-1.937 0-2.566-.052-.62-.05-1.005-.147-1.31-.302a3.25 3.25 0 01-1.42-1.42c-.155-.305-.251-.69-.302-1.31-.051-.63-.052-1.433-.052-2.566V3.154l1.658.737.093.041c.52.232.928.414 1.356.46a2.75 2.75 0 001.371-.2c.397-.167.736-.458 1.168-.83l.077-.065c.345-.296.576-.493.765-.634.183-.136.288-.189.369-.215a1.25 1.25 0 01.787 0c.08.026.185.08.368.215.19.14.42.338.765.634l.077.065c.432.372.771.663 1.168.83a2.75 2.75 0 001.37.2c.429-.046.837-.228 1.357-.46l.093-.041 1.658-.737V20c0 .45.108.875.3 1.25zM6.25 9A.75.75 0 017 8.25h4a.75.75 0 010 1.5H7A.75.75 0 016.25 9zm3 4a.75.75 0 01.75-.75h3a.75.75 0 010 1.5h-3a.75.75 0 01-.75-.75zm.75 3.25a.75.75 0 000 1.5h3a.75.75 0 000-1.5h-3zM8 13a1 1 0 11-2 0 1 1 0 012 0zm-1 5a1 1 0 100-2 1 1 0 000 2z"
          fill={theme.colors[color]}
        />
      )}
    </Svg>
  ),
);
