import type { Screen } from '@app/types';
import { Text } from '@app/components';
import { Container } from './styles';

export const Auth: Screen<'Auth'> = () => (
  <Container>
    <Text>Auth</Text>
  </Container>
);
