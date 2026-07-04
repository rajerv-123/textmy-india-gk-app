import React, { useState } from 'react';
import { View, ScrollView, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { useTranslation } from 'react-i18next';
import { useTheme } from '../context/ThemeContext';
import { useLanguage } from '../context/LanguageContext';
import Header, { SourceLinks } from '../components/Header';
import Card from '../components/Card';
import SettingsPanel from '../components/SettingsPanel';
import { nationalGk } from '../data/nationalGk';

export default function NationalGkScreen({ navigation }) {
  const { theme } = useTheme();
  const { t: translate } = useLanguage();
  const { t } = useTranslation();
  const [settingsOpen, setSettingsOpen] = useState(false);
  const styles = createStyles(theme);

  return (
    <View style={styles.container}>
      <Header
        title={t('nationalGk')}
        showSettings
        onSettings={() => setSettingsOpen(true)}
      />
      <ScrollView contentContainerStyle={styles.scroll}>
        {Object.entries(nationalGk.categories).map(([key, cat]) => (
          <Card
            key={key}
            title={cat.title}
            subtitle={{ en: `${cat.items.length} facts`, hi: `${cat.items.length} तथ्य` }}
            icon={cat.icon}
            onPress={() => navigation.navigate('CategoryDetail', { categoryKey: key })}
          >
            <SourceLinks sources={cat.source} />
          </Card>
        ))}
      </ScrollView>
      <SettingsPanel visible={settingsOpen} onClose={() => setSettingsOpen(false)} />
    </View>
  );
}

export function CategoryDetailScreen({ route }) {
  const { categoryKey } = route.params;
  const cat = nationalGk.categories[categoryKey];
  const { theme } = useTheme();
  const { t: translate } = useLanguage();
  const { t } = useTranslation();
  const styles = createStyles(theme);

  if (!cat) return null;

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.scroll}>
      <View style={styles.catHeader}>
        <Text style={styles.catIcon}>{cat.icon}</Text>
        <Text style={styles.catTitle}>{translate(cat.title)}</Text>
        <SourceLinks sources={cat.source} />
      </View>
      {cat.items.map((item, i) => (
        <View key={i} style={styles.qaCard}>
          <Text style={styles.question}>{translate(item.q)}</Text>
          <Text style={[styles.answer, { color: theme.colors.secondary }]}>
            {translate(item.a)}
          </Text>
        </View>
      ))}
    </ScrollView>
  );
}

const createStyles = (theme) =>
  StyleSheet.create({
    container: { flex: 1, backgroundColor: theme.colors.background },
    scroll: { padding: theme.spacing.md, paddingBottom: theme.spacing.xl },
    catHeader: {
      alignItems: 'center',
      marginBottom: theme.spacing.lg,
    },
    catIcon: { fontSize: 48 },
    catTitle: {
      fontSize: theme.fontSize.xl,
      fontWeight: '800',
      color: theme.colors.text,
      marginVertical: theme.spacing.sm,
    },
    qaCard: {
      backgroundColor: theme.colors.surface,
      padding: theme.spacing.md,
      borderRadius: theme.borderRadius.lg,
      marginBottom: theme.spacing.md,
      ...theme.shadows.card,
    },
    question: {
      fontSize: theme.fontSize.md,
      fontWeight: '600',
      color: theme.colors.text,
      marginBottom: theme.spacing.sm,
    },
    answer: { fontSize: theme.fontSize.md, fontWeight: '700' },
  });
