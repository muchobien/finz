import type { Screen } from '@app/types';
import { styled } from '@app/components';
import { useConnect } from './connect';
import { Button } from './components';
import { useCallback } from 'react';

const DATA = [
  'Pizza',
  'Burger',
  'Risotto',
  null,
  'French Fries',
  'Onion Rings',
  'Fried Shrimps',
  null,
  'Water',
  'Coke',
  'Beer',
  null,
  'Cheese Cake',
  'Ice Cream',
  null,
  'Coffee',
  null,
];

const Container = styled.SafeView('pt:3', 'flex:1');
const Title = styled.Text(
  'text:4xl',
  'color:white',
  'font-weight:semibold',
  'ml:4',
  'pb:4',
);
const Separator = styled.View('h:8');
const List = styled.FlashList;

export const Settings: Screen<'Settings'> = () => {
  const { contentContainerStyle } = useConnect();

  const renderItem = useCallback(
    ({ item, index }) =>
      item === null ? (
        <Separator />
      ) : (
        <Button
          label={item as string}
          isFirst={index === 0 || DATA[index - 1] === null}
          isLast={DATA[index + 1] === null}
          onPress={() => {
            console.log('Pressed: ' + item);
          }}
        />
      ),
    [],
  );

  const getItemType = useCallback(
    item => (item === null ? 'separator' : 'item'),
    [],
  );

  return (
    <Container edges={['top']} mode="padding">
      <Title>Settings</Title>
      <List
        data={DATA}
        renderItem={renderItem}
        getItemType={getItemType}
        contentContainerStyle={contentContainerStyle}
        estimatedItemSize={56}
      />
    </Container>
  );
};
