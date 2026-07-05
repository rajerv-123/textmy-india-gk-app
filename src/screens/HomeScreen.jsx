import React, { useState } from 'react';
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useTranslation } from 'react-i18next';
import { useTheme } from '../context/ThemeContext';
import { useLanguage } from '../context/LanguageContext';
import Header from '../components/Header';
import Card from '../components/Card';
import StateSelector from '../components/StateSelector';
import SettingsPanel from '../components/SettingsPanel';
import { nationalGk, getDailyFact } from '../data/nationalGk';
import { getStates } from '../data/statesMetadata';

export default function HomeScreen({ navigation }) {
  const { theme } = useTheme();
  const { t: translate } = useLanguage();
  const { t } = useTranslation();
  const [settingsOpen, setSettingsOpen] = useState(false);
  const styles = createStyles(theme);
  const dailyFact = getDailyFact();
  const featuredStates = getStates().filter((s) =>
    ['bihar', 'kerala', 'maharashtra', 'delhi', 'rajasthan', 'uttar-pradesh'].includes(s.id),
  );

  return (
    <View style={styles.container}>
      <Header
        title={t('appName')}
        subtitle={t('tagline')}
        showSettings
        onSettings={() => setSettingsOpen(true)}
      />
      <ScrollView contentContainerStyle={styles.scroll}>
        <LinearGradient
          colors={[theme.colors.gradientStart, theme.colors.gradientEnd]}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
          style={styles.hero}
        >
          <Text style={styles.heroFlag}>🇮🇳</Text>
          <Text style={styles.heroTitle}>{t('dailyFact')}</Text>
          <Text style={styles.heroText}>{translate(dailyFact)}</Text>
        </LinearGradient>

        <Text style={styles.sectionTitle}>{t('quickStats')}</Text>
        <View style={styles.statsRow}>
          {nationalGk.quickStats.map((stat, i) => (
            <View key={i} style={styles.statBox}>
              <Text style={styles.statValue}>{stat.value}</Text>
              <Text style={styles.statLabel}>{translate(stat.label)}</Text>
            </View>
          ))}
        </View>

        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>{t('categories')}</Text>
        </View>
        <View style={styles.categoryGrid}>
          {Object.entries(nationalGk.categories).map(([key, cat]) => (
            <TouchableOpacity
              key={key}
              style={styles.categoryItem}
              onPress={() =>
                navigation.navigate('NationalGkTab', {
                  screen: 'CategoryDetail',
                  params: { categoryKey: key },
                })
              }
            >
              <Text style={styles.categoryIcon}>{cat.icon}</Text>
              <Text style={styles.categoryLabel} numberOfLines={2}>
                {translate(cat.title)}
              </Text>
            </TouchableOpacity>
          ))}
        </View>

        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>{t('featuredStates')}</Text>
          <TouchableOpacity onPress={() => navigation.navigate('StateGkTab')}>
            <Text style={styles.viewAll}>{t('viewAll')}</Text>
          </TouchableOpacity>
        </View>
        <StateSelector
          states={featuredStates}
          onSelect={(state) =>
            navigation.navigate('StateGkTab', {
              screen: 'StateDetail',
              params: { stateId: state.id },
            })
          }
        />

        <View style={styles.quickActions}>
          <Card
            title={t('startQuiz')}
            subtitle={t('quizzes')}
            icon="🎯"
            onPress={() => navigation.navigate('QuizTab')}
            color={theme.colors.secondary}
          />
          <Card
            title={t('compareStates')}
            subtitle={t('compareSubtitle')}
            icon="⚖️"
            onPress={() => navigation.navigate('StateGkTab', { screen: 'CompareStates' })}
            color={theme.colors.primary}
          />
        </View>
      </ScrollView>

      <SettingsPanel visible={settingsOpen} onClose={() => setSettingsOpen(false)} />
    </View>
  );
}

const createStyles = (theme) =>
  StyleSheet.create({
    container: { flex: 1, backgroundColor: theme.colors.background },
    scroll: { paddingBottom: theme.spacing.xl },
    hero: {
      margin: theme.spacing.md,
      padding: theme.spacing.lg,
      borderRadius: theme.borderRadius.xl,
    },
    heroFlag: { fontSize: 36, marginBottom: theme.spacing.sm },
    heroTitle: {
      fontSize: theme.fontSize.sm,
      fontWeight: '700',
      color: 'rgba(255,255,255,0.85)',
      textTransform: 'uppercase',
      letterSpacing: 1,
    },
    heroText: {
      fontSize: theme.fontSize.lg,
      fontWeight: '600',
      color: '#FFF',
      marginTop: theme.spacing.sm,
      lineHeight: 26,
    },
    sectionTitle: {
      fontSize: theme.fontSize.lg,
      fontWeight: '700',
      color: theme.colors.text,
      marginHorizontal: theme.spacing.md,
      marginTop: theme.spacing.md,
      marginBottom: theme.spacing.sm,
    },
    sectionHeader: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginRight: theme.spacing.md,
    },
    viewAll: {
      color: theme.colors.primary,
      fontWeight: '600',
      fontSize: theme.fontSize.sm,
    },
    statsRow: {
      flexDirection: 'row',
      paddingHorizontal: theme.spacing.md,
      gap: theme.spacing.sm,
    },
    statBox: {
      flex: 1,
      backgroundColor: theme.colors.surface,
      padding: theme.spacing.md,
      borderRadius: theme.borderRadius.md,
      alignItems: 'center',
      ...theme.shadows.card,
    },
    statValue: {
      fontSize: theme.fontSize.xl,
      fontWeight: '800',
      color: theme.colors.primary,
    },
    statLabel: {
      fontSize: theme.fontSize.xs,
      color: theme.colors.textSecondary,
      textAlign: 'center',
      marginTop: 4,
    },
    categoryGrid: {
      flexDirection: 'row',
      flexWrap: 'wrap',
      paddingHorizontal: theme.spacing.sm,
    },
    quickActions: {
      paddingHorizontal: theme.spacing.md,
      marginTop: theme.spacing.sm,
    },
    categoryItem: {
      width: '25%',
      alignItems: 'center',
      padding: theme.spacing.sm,
    },
    categoryIcon: { fontSize: 28, marginBottom: 4 },
    categoryLabel: {
      fontSize: theme.fontSize.xs,
      color: theme.colors.text,
      textAlign: 'center',
      fontWeight: '500',
    },
  });
