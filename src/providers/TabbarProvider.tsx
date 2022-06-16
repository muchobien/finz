import type { FC } from 'react';
import React, { createContext, useState, useMemo, useCallback } from 'react';
import type { LayoutChangeEvent } from 'react-native';

type TabbarContextValue = {
  height: number;
  updateHeight: (_e: LayoutChangeEvent) => void;
};

export const TabbarContext = createContext<TabbarContextValue>(
  {} as TabbarContextValue,
);

export const TabbarProvider: FC = ({ children }) => {
  const [height, setHeight] = useState(0);

  const updateHeight = useCallback(
    ({ nativeEvent: { layout } }: LayoutChangeEvent) => {
      setHeight(layout.height);
    },
    [],
  );

  const value = useMemo<TabbarContextValue>(
    () => ({ height, updateHeight }),
    [height, updateHeight],
  );

  return (
    <TabbarContext.Provider value={value}>{children}</TabbarContext.Provider>
  );
};
