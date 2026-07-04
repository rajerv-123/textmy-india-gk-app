import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Modal } from 'react-native';
import { useTranslation } from 'react-i18next';
import { useTheme } from '../context/ThemeContext';
import { useLanguage } from '../context/LanguageContext';

export default function SettingsPanel({ visible, onClose }) {
  const { theme, isDark, toggleTheme } = useTheme();
  const { language, setLanguage } = useLanguage();
  const { t } = useTranslation();
  const styles = createStyles(theme);

  return (
    <Modal visible={visible} transparent animationType="slide" onRequestClose={onClose}>
      <View style={styles.overlay}>
        <View style={styles.panel}>
          <View style={styles.header}>
            <Text style={styles.title}>{t('settings')}</Text>
            <TouchableOpacity onPress={onClose}>
              <Text style={styles.close}>✕</Text>
            </TouchableOpacity>
          </View>

          <Text style={styles.sectionLabel}>{t('language')}</Text>
          <View style={styles.row}>
            <ToggleBtn
              label={t('english')}
              active={language === 'en'}
              onPress={() => setLanguage('en')}
              theme={theme}
            />
            <ToggleBtn
              label={t('hindi')}
              active={language === 'hi'}
              onPress={() => setLanguage('hi')}
              theme={theme}
            />
          </View>

          <Text style={styles.sectionLabel}>{isDark ? t('darkMode') : t('lightMode')}</Text>
          <TouchableOpacity style={styles.themeToggle} onPress={toggleTheme}>
            <Text style={styles.themeIcon}>{isDark ? '🌙' : '☀️'}</Text>
            <Text style={styles.themeLabel}>
              {isDark ? t('darkMode') : t('lightMode')}
            </Text>
            <View style={[styles.switch, isDark && styles.switchOn]}>
              <View style={[styles.switchKnob, isDark && styles.switchKnobOn]} />
            </View>
          </TouchableOpacity>

          <Text style={styles.footer}>
            🇮🇳 India GK v1.0 — Data from Wikipedia & Official Govt Portals
          </Text>
        </View>
      </View>
    </Modal>
  );
}

function ToggleBtn({ label, active, onPress, theme }) {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        flex: 1,
        padding: 12,
        borderRadius: 12,
        backgroundColor: active ? theme.colors.primary : theme.colors.background,
        alignItems: 'center',
        marginHorizontal: 4,
      }}
    >
      <Text
        style={{
          fontWeight: '700',
          color: active ? '#FFF' : theme.colors.text,
        }}
      >
        {label}
      </Text>
    </TouchableOpacity>
  );
}

const createStyles = (theme) =>
  StyleSheet.create({
    overlay: {
      flex: 1,
      backgroundColor: theme.colors.overlay,
      justifyContent: 'flex-end',
    },
    panel: {
      backgroundColor: theme.colors.surface,
      borderTopLeftRadius: 24,
      borderTopRightRadius: 24,
      padding: theme.spacing.lg,
      minHeight: 320,
    },
    header: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: theme.spacing.lg,
    },
    title: {
      fontSize: theme.fontSize.xl,
      fontWeight: '700',
      color: theme.colors.text,
    },
    close: { fontSize: 22, color: theme.colors.textSecondary },
    sectionLabel: {
      fontSize: theme.fontSize.sm,
      fontWeight: '600',
      color: theme.colors.textSecondary,
      marginBottom: theme.spacing.sm,
      textTransform: 'uppercase',
      letterSpacing: 1,
    },
    row: { flexDirection: 'row', marginBottom: theme.spacing.lg },
    themeToggle: {
      flexDirection: 'row',
      alignItems: 'center',
      backgroundColor: theme.colors.background,
      padding: theme.spacing.md,
      borderRadius: theme.borderRadius.md,
      marginBottom: theme.spacing.lg,
    },
    themeIcon: { fontSize: 24, marginRight: theme.spacing.sm },
    themeLabel: {
      flex: 1,
      fontSize: theme.fontSize.md,
      fontWeight: '600',
      color: theme.colors.text,
    },
    switch: {
      width: 50,
      height: 28,
      borderRadius: 14,
      backgroundColor: theme.colors.border,
      justifyContent: 'center',
      paddingHorizontal: 3,
    },
    switchOn: { backgroundColor: theme.colors.primary },
    switchKnob: {
      width: 22,
      height: 22,
      borderRadius: 11,
      backgroundColor: '#FFF',
    },
    switchKnobOn: { alignSelf: 'flex-end' },
    footer: {
      textAlign: 'center',
      color: theme.colors.textSecondary,
      fontSize: theme.fontSize.xs,
      marginTop: theme.spacing.md,
    },
  });
