import type { Screen } from '@app/types';
import { Button, Text } from '@app/components';
import { Container } from './styles';
import { store } from '@app/services';

export const Auth: Screen<'Auth'> = () => (
  <Container>
    <Text font="largeTitle" weight="600">
      Auth
    </Text>
    <Button title="Authenticate" onPress={() => store.set('@logged', true)} />
  </Container>
);
