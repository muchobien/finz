import { styled, Button } from '@app/components';
import { store } from '@app/services';
import type { Screen } from '@app/types';

const Container = styled.SafeView('pt:3', 'flex:1', 'py:4');
const Title = styled.Text(
  'text:4xl',
  'color:white',
  'font-weight:semibold',
  'ml:4',
  'pb:4',
);

export const Auth: Screen<'Auth'> = () => (
  <Container edges={['top', 'bottom']} mode="padding">
    <Title>Auth</Title>
    <Button
      title="Authenticate"
      onPress={() => store.set('@logged', true)}
      classes={['bg:indigo-800']}
    />
  </Container>
);
