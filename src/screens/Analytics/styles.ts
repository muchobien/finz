import { View } from '@app/components';
import styled from '@emotion/native';

export const Container = styled(View.Safe)(({ theme }) => ({
  paddingHorizontal: theme.scale.medium,
  paddingTop: theme.scale.medium,
}));
