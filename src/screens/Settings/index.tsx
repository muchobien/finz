import type { Screen } from '@app/types';
import { Spacer, Text } from '@app/components';
import { Container } from './styles';
import { SectionList, View, StyleSheet } from 'react-native';
import { useConnect } from './connect';

const DATA = [
  {
    title: 'Main dishes',
    data: ['Pizza', 'Burger', 'Risotto'],
  },
  {
    title: 'Sides',
    data: ['French Fries', 'Onion Rings', 'Fried Shrimps'],
  },
  {
    title: 'Drinks',
    data: ['Water', 'Coke', 'Beer'],
  },
  {
    title: 'Desserts',
    data: ['Cheese Cake', 'Ice Cream'],
  },
];

const BORDER_RADIUS = 10;

const Item = ({ title, isFirst, isLast }) => (
  <View
    style={[
      styles.item,
      isFirst && {
        borderTopLeftRadius: BORDER_RADIUS,
        borderTopRightRadius: BORDER_RADIUS,
      },
      isLast && {
        borderBottomLeftRadius: BORDER_RADIUS,
        borderBottomRightRadius: BORDER_RADIUS,
      },
    ]}>
    <Text font="callout">{title}</Text>
  </View>
);

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
          <Item
            title={item}
            isFirst={index === 0}
            isLast={index === section.data.length - 1}
          />
        )}
        contentContainerStyle={contentContainerStyle}
        renderSectionHeader={() => <Spacer.Vertical size="xl" />}
      />
    </Container>
  );
};

const styles = StyleSheet.create({
  item: {
    backgroundColor: 'rgb(28, 28, 30)',
    padding: 16,
  },
});
