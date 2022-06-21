const baseSize = 16;

export const borderRadius = {
  huge: 16,
  large: 10,
  medium: 6,
  small: 4,
};

export const iconSize = {
  micro: 12,
  tiny: 14,
  small: 16,
  regular: 20,
  large: 24,
};

export const spacing = {
  0: 1,
  '0.5': baseSize * 0.125,
  1: baseSize * 0.25,
  '1.5': baseSize * 0.375,
  2: baseSize * 0.5,
  '2.5': baseSize * 0.625,
  3: baseSize * 0.75,
  '3.5': baseSize * 0.875,
  4: baseSize * 1,
  5: baseSize * 1.25,
  6: baseSize * 1.5,
  7: baseSize * 1.75,
  8: baseSize * 2,
  9: baseSize * 2.25,
  10: baseSize * 2.5,
  11: baseSize * 2.75,
  12: baseSize * 3,
  14: baseSize * 3.5,
  16: baseSize * 4,
  20: baseSize * 5,
  24: baseSize * 6,
  28: baseSize * 7,
  32: baseSize * 8,
  36: baseSize * 9,
  40: baseSize * 10,
  44: baseSize * 11,
  48: baseSize * 12,
  52: baseSize * 13,
  56: baseSize * 14,
  60: baseSize * 15,
  64: baseSize * 16,
  72: baseSize * 18,
  80: baseSize * 20,
  96: baseSize * 24,
};

type SpacingKey = `${keyof typeof spacing}`;
type DescriptiveScale = 'micro' | 'tiny' | 'small' | 'medium' | 'large' | 'xl';
type ScaleKey = SpacingKey | DescriptiveScale;
export type Scale = Record<ScaleKey, number>;

export const scale: Scale = {
  micro: spacing[0.5],
  tiny: spacing[1],
  small: spacing[3],
  medium: spacing[4],
  large: spacing[6],
  xl: spacing[8],
  ...spacing,
};
