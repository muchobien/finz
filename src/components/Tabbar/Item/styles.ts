import { Text } from '@app/components/Text';
import styled from '@emotion/native';
import { Platform } from 'react-native';
import { BorderlessButton } from 'react-native-gesture-handler';

export const Presable = styled(BorderlessButton)(({ theme }) => ({
  paddingBottom: Platform.select({
    ios: theme.device.insets.bottom,
    android: theme.device.insets.bottom + 16,
  }),
  marginTop: 16,
  flexGrow: 1,
  justifyContent: 'center',
  alignItems: 'center',
}));

Presable.defaultProps = {
  activeOpacity: 1,
};

export const Label = styled(Text)<{ focused: boolean }>`
  color: ${({ focused, theme }) =>
    focused ? theme.colors.indigo : theme.colors.white70};
  margin-top: 2px;
`;

Label.defaultProps = {
  font: 'footnote',
};
