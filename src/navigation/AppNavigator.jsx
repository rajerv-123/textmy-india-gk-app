import React from 'react';
import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Text } from 'react-native';
import { useTranslation } from 'react-i18next';
import { useTheme } from '../context/ThemeContext';

import HomeScreen from '../screens/HomeScreen';
import NationalGkScreen, { CategoryDetailScreen } from '../screens/NationalGkScreen';
import StateListScreen from '../screens/StateListScreen';
import StateDetailScreen from '../screens/StateDetailScreen';
import DistrictDetailScreen from '../screens/DistrictDetailScreen';
import QuizScreen from '../screens/QuizScreen';
import CompareStatesScreen from '../screens/CompareStatesScreen';

const Tab = createBottomTabNavigator();
const HomeStack = createNativeStackNavigator();
const NationalStack = createNativeStackNavigator();
const StateStack = createNativeStackNavigator();
const QuizStack = createNativeStackNavigator();

function TabIcon({ emoji, focused, color }) {
  return <Text style={{ fontSize: focused ? 22 : 20, opacity: focused ? 1 : 0.6 }}>{emoji}</Text>;
}

function HomeStackScreen() {
  return (
    <HomeStack.Navigator screenOptions={{ headerShown: false }}>
      <HomeStack.Screen name="HomeMain" component={HomeScreen} />
    </HomeStack.Navigator>
  );
}

function NationalStackScreen() {
  const { t } = useTranslation();
  const { theme } = useTheme();
  return (
    <NationalStack.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: theme.colors.surface },
        headerTintColor: theme.colors.text,
        headerTitleStyle: { fontWeight: '700' },
      }}
    >
      <NationalStack.Screen
        name="NationalGkMain"
        component={NationalGkScreen}
        options={{ headerShown: false }}
      />
      <NationalStack.Screen
        name="CategoryDetail"
        component={CategoryDetailScreen}
        options={({ route }) => ({
          title: t(`nationalCategories.${route.params.categoryKey}`),
        })}
      />
    </NationalStack.Navigator>
  );
}

function StateStackScreen() {
  const { t } = useTranslation();
  const { theme } = useTheme();
  return (
    <StateStack.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: theme.colors.surface },
        headerTintColor: theme.colors.text,
        headerTitleStyle: { fontWeight: '700' },
      }}
    >
      <StateStack.Screen
        name="StateList"
        component={StateListScreen}
        options={{ headerShown: false }}
      />
      <StateStack.Screen
        name="StateDetail"
        component={StateDetailScreen}
        options={{ headerShown: false }}
      />
      <StateStack.Screen
        name="DistrictDetail"
        component={DistrictDetailScreen}
        options={{ headerShown: false }}
      />
      <StateStack.Screen
        name="CompareStates"
        component={CompareStatesScreen}
        options={{ headerShown: false }}
      />
    </StateStack.Navigator>
  );
}

function QuizStackScreen() {
  return (
    <QuizStack.Navigator screenOptions={{ headerShown: false }}>
      <QuizStack.Screen name="Quiz" component={QuizScreen} />
    </QuizStack.Navigator>
  );
}

export default function AppNavigator() {
  const { theme, isDark } = useTheme();
  const { t } = useTranslation();

  const navTheme = {
    ...(isDark ? DarkTheme : DefaultTheme),
    colors: {
      ...(isDark ? DarkTheme.colors : DefaultTheme.colors),
      primary: theme.colors.primary,
      background: theme.colors.background,
      card: theme.colors.surface,
      text: theme.colors.text,
      border: theme.colors.border,
    },
  };

  return (
    <NavigationContainer theme={navTheme}>
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
          tabBarStyle: {
            backgroundColor: theme.colors.tabBar,
            borderTopColor: theme.colors.border,
            paddingBottom: 4,
            height: 58,
          },
          tabBarActiveTintColor: theme.colors.tabBarActive,
          tabBarInactiveTintColor: theme.colors.tabBarInactive,
          tabBarLabelStyle: { fontSize: 11, fontWeight: '600' },
        }}
      >
        <Tab.Screen
          name="HomeTab"
          component={HomeStackScreen}
          options={{
            tabBarLabel: t('home'),
            tabBarIcon: ({ focused, color }) => (
              <TabIcon emoji="🏠" focused={focused} color={color} />
            ),
          }}
        />
        <Tab.Screen
          name="NationalGkTab"
          component={NationalStackScreen}
          options={{
            tabBarLabel: t('nationalGk'),
            tabBarIcon: ({ focused, color }) => (
              <TabIcon emoji="🇮🇳" focused={focused} color={color} />
            ),
          }}
        />
        <Tab.Screen
          name="StateGkTab"
          component={StateStackScreen}
          options={{
            tabBarLabel: t('stateGk'),
            tabBarIcon: ({ focused, color }) => (
              <TabIcon emoji="🗺️" focused={focused} color={color} />
            ),
          }}
        />
        <Tab.Screen
          name="QuizTab"
          component={QuizStackScreen}
          options={{
            tabBarLabel: t('quizzes'),
            tabBarIcon: ({ focused, color }) => (
              <TabIcon emoji="🎯" focused={focused} color={color} />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
