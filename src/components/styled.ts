import { makeStyledComponent, styled as styledZephyr } from '@app/theme';
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
  SectionList: makeStyledComponent(SectionList),
  Text: makeStyledComponent(Text),
  View: makeStyledComponent(View),
};

export const styled = {
  BlurView: styledZephyr(BlurView),
  BorderlessButton: styledZephyr(BorderlessButton),
  RectButton: styledZephyr(RectButton),
  SafeView: styledZephyr(SafeAreaView),
  ScrollView: styledZephyr(ScrollView),
  SectionList: styledZephyr(SectionList),
  Text: styledZephyr(Text),
  View: styledZephyr(View),
};
