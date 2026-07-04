import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useTheme } from '../context/ThemeContext';
import { useLanguage } from '../context/LanguageContext';

export default function Card({
  title,
  subtitle,
  icon,
  color,
  onPress,
  badge,
  children,
  style,
}) {
  const { theme } = useTheme();
  const { t: translate } = useLanguage();
  const styles = createStyles(theme);
  const accent = color || theme.colors.primary;

  const content = (
    <View style={[styles.card, style]}>
      <View style={[styles.accent, { backgroundColor: accent }]} />
      <View style={styles.body}>
        <View style={styles.header}>
          {icon && <Text style={styles.icon}>{icon}</Text>}
          <View style={styles.titleWrap}>
            {title && (
              <Text style={styles.title} numberOfLines={2}>
                {typeof title === 'object' ? translate(title) : title}
              </Text>
            )}
            {subtitle && (
              <Text style={styles.subtitle} numberOfLines={2}>
                {typeof subtitle === 'object' ? translate(subtitle) : subtitle}
              </Text>
            )}
          </View>
          {badge && (
            <View style={[styles.badge, { backgroundColor: accent + '22' }]}>
              <Text style={[styles.badgeText, { color: accent }]}>{badge}</Text>
            </View>
          )}
        </View>
        {children}
      </View>
    </View>
  );

  if (onPress) {
    return (
      <TouchableOpacity onPress={onPress} activeOpacity={0.7}>
        {content}
      </TouchableOpacity>
    );
  }
  return content;
}

export function InfoRow({ label, value, icon }) {
  const { theme } = useTheme();
  const { t: translate } = useLanguage();
  return (
    <View
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: theme.spacing.sm,
        borderBottomWidth: 1,
        borderBottomColor: theme.colors.border,
      }}
    >
      {icon && <Text style={{ marginRight: 8, fontSize: 16 }}>{icon}</Text>}
      <Text style={{ flex: 1, color: theme.colors.textSecondary, fontSize: theme.fontSize.sm }}>
        {typeof label === 'object' ? translate(label) : label}
      </Text>
      <Text
        style={{
          flex: 1.5,
          color: theme.colors.text,
          fontSize: theme.fontSize.sm,
          fontWeight: '600',
          textAlign: 'right',
        }}
      >
        {typeof value === 'object' ? translate(value) : value}
      </Text>
    </View>
  );
}

const createStyles = (theme) =>
  StyleSheet.create({
    card: {
      backgroundColor: theme.colors.card,
      borderRadius: theme.borderRadius.lg,
      overflow: 'hidden',
      marginBottom: theme.spacing.md,
      ...theme.shadows.card,
    },
    accent: { height: 4 },
    body: { padding: theme.spacing.md },
    header: { flexDirection: 'row', alignItems: 'flex-start' },
    icon: { fontSize: 28, marginRight: theme.spacing.sm },
    titleWrap: { flex: 1 },
    title: {
      fontSize: theme.fontSize.md,
      fontWeight: '700',
      color: theme.colors.text,
    },
    subtitle: {
      fontSize: theme.fontSize.sm,
      color: theme.colors.textSecondary,
      marginTop: 4,
    },
    badge: {
      paddingHorizontal: 10,
      paddingVertical: 4,
      borderRadius: theme.borderRadius.full,
    },
    badgeText: { fontSize: theme.fontSize.xs, fontWeight: '700' },
  });
