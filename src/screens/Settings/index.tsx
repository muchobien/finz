import type { Screen } from '@app/types';
import { Text } from '@app/components';
import { Container } from './styles';

export const Settings: Screen<'Settings'> = () => (
  <Container>
    <Text font="largeTitle" weight="600">
      Settings
    </Text>
  </Container>
);
