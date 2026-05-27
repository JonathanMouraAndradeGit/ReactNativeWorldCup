import {
  TabList,
  TabListProps,
  Tabs,
  TabSlot,
  TabTrigger,
  TabTriggerSlotProps,
} from 'expo-router/ui';
import React from 'react';
import { Pressable, StyleSheet, useColorScheme, View } from 'react-native';

import { ThemedText } from './themed-text';
import { ThemedView } from './themed-view';

import { Colors, MaxContentWidth, Spacing } from '@/constants/theme';

export default function AppTabs() {
  return (
    <Tabs>
      <TabSlot style={{ height: '100%' }} />
      <TabList asChild>
        <CustomTabList>
          <TabTrigger name="mainhome" href="/mainhome" asChild>
            <TabButton>Home</TabButton>
          </TabTrigger>
          <TabTrigger name="datacop" href="/datacop" asChild>
            <TabButton>Grupos</TabButton>
          </TabTrigger>

          <TabTrigger name="US" href="/uspage" asChild style={{ display: "none" }}>
            <TabButton style={{ display: "none" }}>us</TabButton>
          </TabTrigger>
          <TabTrigger name="CA" href="/capage" asChild style={{ display: "none" }}>
            <TabButton style={{ display: "none" }}>ca</TabButton>
          </TabTrigger>
          <TabTrigger name="ME" href="/mepage" asChild style={{ display: "none" }}>
            <TabButton style={{ display: "none" }}>me</TabButton>
          </TabTrigger>
        </CustomTabList>
      </TabList>
    </Tabs>
  );
}

export function TabButton({ children, isFocused, ...props }: TabTriggerSlotProps) {
  return (
    <Pressable {...props} style={({ pressed }) => pressed && styles.pressed}>
      <ThemedView
        type={isFocused ? 'backgroundSelected' : 'backgroundElement'}
        style={styles.tabButtonView}>
        <ThemedText type="small" themeColor={isFocused ? 'text' : 'textSecondary'}>
          {children}
        </ThemedText>
      </ThemedView>
    </Pressable>
  );
}

export function CustomTabList(props: TabListProps) {
  const scheme = useColorScheme();
  const colors = Colors[scheme === 'unspecified' ? 'light' : scheme];

  return (
    <View {...props} style={styles.tabListContainer}>
      <ThemedView type="backgroundElement" style={styles.innerContainer}>
        <ThemedText type="smallBold" style={styles.brandText}>
          Copa 2026
        </ThemedText>

        {props.children}
      </ThemedView>
    </View>
  );
}

const styles = StyleSheet.create({
  tabListContainer: {
    position: 'absolute',
    width: '100%',
    paddingHorizontal: Spacing.four,
    paddingTop: Spacing.three,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    zIndex: 10,
  },

  innerContainer: {
    paddingVertical: Spacing.two,
    paddingHorizontal: Spacing.five,
    borderRadius: 999,
    flexDirection: 'row',
    alignItems: 'center',
    flexGrow: 1,
    gap: Spacing.two,
    maxWidth: MaxContentWidth,

    // visual mais claro e moderno
    backgroundColor: 'rgba(255,255,255,0.92)',
    borderWidth: 1,
    borderColor: 'rgba(120,170,255,0.18)',

    shadowColor: '#7CB8FF',
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.12,
    shadowRadius: 14,
    elevation: 8,
  },

  brandText: {
    marginRight: 'auto',
    color: '#1E3A5F',
    fontWeight: '900',
    letterSpacing: 1,
    textTransform: 'uppercase',
    fontSize: 16,
  },

  pressed: {
    opacity: 0.88,
    transform: [{ scale: 0.98 }],
  },

  tabButtonView: {
    paddingVertical: Spacing.one + 2,
    paddingHorizontal: Spacing.four,
    borderRadius: 999,

    backgroundColor: '#EEF4FF',
    borderWidth: 1,
    borderColor: '#D6E4FF',
  },

  activeTabButton: {
    backgroundColor: '#6EC6FF', // azul claro destaque
    borderColor: '#A7DDFF',

    shadowColor: '#6EC6FF',
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.45,
    shadowRadius: 12,
    elevation: 8,

    transform: [{ scale: 1.03 }],
  },

  activeTabText: {
    color: '#003554',
    fontWeight: '900',
    letterSpacing: 0.5,
  },

  tabText: {
    color: '#4A6280',
    fontWeight: '700',
    letterSpacing: 0.3,
  },

  externalPressable: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: Spacing.one,
    marginLeft: Spacing.three,

    paddingVertical: Spacing.one,
    paddingHorizontal: Spacing.three,
    borderRadius: 999,

    backgroundColor: '#F3F7FF',
    borderWidth: 1,
    borderColor: '#DCE8FF',
  },

  scoreBadge: {
    backgroundColor: '#FFE082',
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 999,
  },

  scoreBadgeText: {
    color: '#5C4300',
    fontWeight: '900',
    fontSize: 12,
  },
});

/*
<TabTrigger name="home" href="/" asChild>
            <TabButton>Home</TabButton>
          </TabTrigger>
          <TabTrigger name="explore" href="/explore" asChild>
            <TabButton>Explore</TabButton>
          </TabTrigger>

          <ExternalLink href="https://docs.expo.dev" asChild>
          <Pressable style={styles.externalPressable}>
            <ThemedText type="link">Docs</ThemedText>
            <SymbolView
              tintColor={colors.text}
              name={{ ios: 'arrow.up.right.square', web: 'link' }}
              size={12}
            />
          </Pressable>
        </ExternalLink>
*/