import type { Screen } from '@app/types';
import { Spacer, Text } from '@app/components';
import { Container } from './styles';
import { SectionList } from 'react-native';
import { useConnect } from './connect';
import { Button } from './components';

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

export const Settings: Screen<'Settings'> = () => {
  const { contentContainerStyle } = useConnect();
  return (
    <Container mode="margin">
      <Text font="largeTitle" weight="600">
        Settings
      </Text>
      <SectionList
        sections={DATA}
        keyExtractor={(item, index) => item + index}
        renderItem={({ item, index, section }) => (
          <Button
            label={item}
            isFirst={index === 0}
            isLast={index === section.data.length - 1}
            onPress={() => {
              console.log('Pressed: ' + item);
            }}
          />
        )}
        contentContainerStyle={contentContainerStyle}
        renderSectionHeader={() => <Spacer.Vertical size="xl" />}
      />
    </Container>
  );
};
