import type { Screen } from '@app/types';
import { Text } from '@app/components';
import { Container } from './styles';

export const Assets: Screen<'Assets'> = () => (
  <Container>
    <Text font="largeTitle" weight="600">
      Assets
    </Text>
  </Container>
);
