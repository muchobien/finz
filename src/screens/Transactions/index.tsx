import type { Screen } from '@app/types';
import { Text } from '@app/components';
import { Container } from './styles';

export const Transactions: Screen<'Transactions'> = () => (
  <Container>
    <Text font="largeTitle" weight="600">
      Transactions
    </Text>
  </Container>
);
