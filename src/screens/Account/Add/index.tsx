import type { Screen } from '@app/types';
import { Styled } from '@app/components';

export const AccountAdd: Screen<'AccountAdd'> = () => (
  <Styled.SafeView
    classes={['pt:3', 'flex:1', 'py:4']}
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
      Account
    </Styled.Text>
  </Styled.SafeView>
);
