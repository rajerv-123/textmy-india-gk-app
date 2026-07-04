import React, { createContext, useContext, useState, useEffect, useMemo } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useColorScheme } from 'react-native';
import { getTheme } from '../styles/theme';

const ThemeContext = createContext(null);
const STORAGE_KEY = '@india_gk_theme';

export function ThemeProvider({ children }) {
  const systemScheme = useColorScheme();
  const [preference, setPreference] = useState('system');
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    AsyncStorage.getItem(STORAGE_KEY).then((value) => {
      if (value) setPreference(value);
      setLoaded(true);
    });
  }, []);

  const isDark =
    preference === 'dark' ||
    (preference === 'system' && systemScheme === 'dark');

  const theme = useMemo(() => getTheme(isDark), [isDark]);

  const toggleTheme = async () => {
    const next = isDark ? 'light' : 'dark';
    setPreference(next);
    await AsyncStorage.setItem(STORAGE_KEY, next);
  };

  const setThemeMode = async (mode) => {
    setPreference(mode);
    await AsyncStorage.setItem(STORAGE_KEY, mode);
  };

  if (!loaded) return null;

  return (
    <ThemeContext.Provider
      value={{ theme, isDark, preference, toggleTheme, setThemeMode }}
    >
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const ctx = useContext(ThemeContext);
  if (!ctx) throw new Error('useTheme must be used within ThemeProvider');
  return ctx;
}
