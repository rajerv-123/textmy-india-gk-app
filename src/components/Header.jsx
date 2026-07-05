import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Linking } from 'react-native';
import { useTheme } from '../context/ThemeContext';
import { useLanguage } from '../context/LanguageContext';

export default function Header({
  title,
  subtitle,
  onBack,
  rightAction,
  showSettings = false,
  onSettings,
}) {
  const { theme } = useTheme();
  const { t: translate } = useLanguage();
  const styles = createStyles(theme);

  return (
    <View style={styles.container}>
      <View style={styles.row}>
        {onBack && (
          <TouchableOpacity onPress={onBack} style={styles.backBtn}>
            <Text style={styles.backText}>←</Text>
          </TouchableOpacity>
        )}
        <View style={styles.titleWrap}>
          <Text style={styles.title} numberOfLines={1}>
            {typeof title === 'object' ? translate(title) : title}
          </Text>
          {subtitle && (
            <Text style={styles.subtitle} numberOfLines={1}>
              {typeof subtitle === 'object' ? translate(subtitle) : subtitle}
            </Text>
          )}
        </View>
        {showSettings && (
          <TouchableOpacity onPress={onSettings} style={styles.iconBtn}>
            <Text style={styles.iconText}>⚙️</Text>
          </TouchableOpacity>
        )}
        {rightAction}
      </View>
    </View>
  );
}

export function SourceLinks({ sources, style }) {
  const { theme } = useTheme();
  const { t: translate, language } = useLanguage();
  if (!sources) return null;

  const open = (url) => url && Linking.openURL(url);

  return (
    <View style={[{ flexDirection: 'row', flexWrap: 'wrap', gap: 8 }, style]}>
      {sources.wikipedia && (
        <TouchableOpacity
          onPress={() => open(sources.wikipedia)}
          style={{
            backgroundColor: theme.colors.chip,
            paddingHorizontal: 12,
            paddingVertical: 6,
            borderRadius: theme.borderRadius.full,
          }}
        >
          <Text style={{ color: theme.colors.chipText, fontSize: theme.fontSize.sm }}>
            📖 {language === 'hi' ? 'विकिपीडिया' : 'Wikipedia'}
          </Text>
        </TouchableOpacity>
      )}
      {sources.govt && (
        <TouchableOpacity
          onPress={() => open(sources.govt)}
          style={{
            backgroundColor: theme.colors.chip,
            paddingHorizontal: 12,
            paddingVertical: 6,
            borderRadius: theme.borderRadius.full,
          }}
        >
          <Text style={{ color: theme.colors.chipText, fontSize: theme.fontSize.sm }}>
            🏛️ {language === 'hi' ? 'आधिकारिक' : 'Official'}
          </Text>
        </TouchableOpacity>
      )}
    </View>
  );
}

const createStyles = (theme) =>
  StyleSheet.create({
    container: {
      paddingHorizontal: theme.spacing.lg,
      paddingVertical: theme.spacing.md,
      backgroundColor: theme.colors.surface,
      borderBottomWidth: 2,
      borderBottomColor: theme.colors.primary + '20',
      ...theme.shadows.card,
    },
    row: { flexDirection: 'row', alignItems: 'center' },
    backBtn: {
      marginRight: theme.spacing.md,
      padding: theme.spacing.md,
      borderRadius: theme.borderRadius.md,
      backgroundColor: theme.colors.background,
    },
    backText: { fontSize: theme.fontSize.xl, color: theme.colors.primary, fontWeight: '700' },
    titleWrap: { flex: 1 },
    title: {
      fontSize: theme.fontSize.xl,
      fontWeight: '700',
      color: theme.colors.text,
      lineHeight: 28,
    },
    subtitle: {
      fontSize: theme.fontSize.sm,
      color: theme.colors.textSecondary,
      marginTop: 4,
    },
    iconBtn: { 
      padding: theme.spacing.md,
      borderRadius: theme.borderRadius.md,
      backgroundColor: theme.colors.background,
    },
    iconText: { fontSize: theme.fontSize.lg },
  });
