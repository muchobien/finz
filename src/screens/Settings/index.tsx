import type { Screen } from '@app/types';
import { styled } from '@app/components';
import { useConnect } from './connect';
import { Button } from './components';
import { useCallback } from 'react';

const DATA = [
  {
    data: ['Pizza', 'Burger', 'Risotto'],
  },
  {
    data: ['French Fries', 'Onion Rings', 'Fried Shrimps'],
  },
  {
    data: ['Water', 'Coke', 'Beer'],
  },
  {
    data: ['Cheese Cake', 'Ice Cream'],
  },
  {
    data: ['Coffee'],
  },
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
const List = styled.SectionList('pt:0');

export const Settings: Screen<'Settings'> = () => {
  const { contentContainerStyle } = useConnect();

  const renderSectionHeader = useCallback(() => <Separator />, []);

  const renderItem = useCallback(
    ({ item, index, section }) => (
      <Button
        label={item as string}
        isFirst={index === 0}
        isLast={index === section.data.length - 1}
        onPress={() => {
          console.log('Pressed: ' + item);
        }}
      />
    ),
    [],
  );

  const keyExtractor = useCallback((item, index) => `${item}${index}`, []);

  return (
    <Container edges={['top']} mode="padding">
      <Title>Settings</Title>
      <List
        sections={DATA}
        stickySectionHeadersEnabled={false}
        keyExtractor={keyExtractor}
        renderItem={renderItem}
        contentContainerStyle={contentContainerStyle}
        renderSectionHeader={renderSectionHeader}
      />
    </Container>
  );
};
