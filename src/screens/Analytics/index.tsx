import type { Screen } from '@app/types';
import { Text } from '@app/components';
import { Container } from './styles';

export const Analytics: Screen<'Analytics'> = () => (
  <Container>
    <Text font="largeTitle" weight="600">
      Analytics
    </Text>
  </Container>
);
