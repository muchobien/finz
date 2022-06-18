import type { Screen } from '@app/types';
import { Text } from '@app/components';
import { Container } from './styles';

export const Home: Screen<'Home'> = () => (
  <Container>
    <Text font="largeTitle" weight="600">
      Home
    </Text>
  </Container>
);
