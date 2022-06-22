import type { Screen } from '@app/types';
import { Styled } from '@app/components';
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
    <Styled.SafeView
      classes={['pt:3', 'flex:1']}
      edges={['top']}
      mode="padding">
      <Styled.Text
        classes={[
          'text:4xl',
          'color:white',
          'font-weight:semibold',
          'ml:4',
          'pb:4',
        ]}>
        Settings
      </Styled.Text>
      <Styled.SectionList
        sections={DATA}
        stickySectionHeadersEnabled={false}
        classes={['pt:0']}
        keyExtractor={(item, index) => `${item}${index}`}
        renderItem={({ item, index, section }) => (
          <Button
            label={item as string}
            isFirst={index === 0}
            isLast={index === section.data.length - 1}
            onPress={() => {
              console.log('Pressed: ' + item);
            }}
          />
        )}
        contentContainerStyle={contentContainerStyle}
        renderSectionHeader={() => <Styled.View classes={['h:8']} />}
      />
    </Styled.SafeView>
  );
};
