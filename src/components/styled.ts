import { makeStyledComponent } from '@app/theme';
import { View, Text, ScrollView, SectionList } from 'react-native';
import { BorderlessButton, RectButton } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';
import { BlurView } from 'expo-blur';

export const Styled = {
  BlurView: makeStyledComponent(BlurView),
  BorderlessButton: makeStyledComponent(BorderlessButton),
  RectButton: makeStyledComponent(RectButton),
  SafeView: makeStyledComponent(SafeAreaView),
  ScrollView: makeStyledComponent(ScrollView),
  Text: makeStyledComponent(Text),
  View: makeStyledComponent(View),
  SectionList: makeStyledComponent(SectionList),
};
