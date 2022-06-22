import type { Screen } from '@app/types';
import { Button, Styled } from '@app/components';
import { store } from '@app/services';

export const Auth: Screen<'Auth'> = () => (
  <Styled.SafeView
    classes={['pt:3', 'flex:1']}
    edges={['top', 'bottom']}
    mode="padding">
    <Styled.Text
      classes={[
        'text:4xl',
        'color:white',
        'font-weight:semibold',
        'ml:4',
        'pb:4',
      ]}>
      Auth
    </Styled.Text>
    <Button
      title="Authenticate"
      onPress={() => store.set('@logged', true)}
      classes={['bg:indigo-800']}
    />
  </Styled.SafeView>
);
