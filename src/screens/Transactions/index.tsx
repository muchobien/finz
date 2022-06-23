import type { Screen } from '@app/types';
import { styled } from '@app/components';

const Container = styled.SafeView('pt:3', 'flex:1', 'py:4');
const Title = styled.Text(
  'text:4xl',
  'color:white',
  'font-weight:semibold',
  'ml:4',
  'pb:4',
);

export const Transactions: Screen<'Transactions'> = () => (
  <Container edges={['top', 'bottom']} mode="padding">
    <Title>Transactions</Title>
  </Container>
);
