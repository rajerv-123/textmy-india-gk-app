import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  ActivityIndicator,
  Image,
} from 'react-native';
import { useTranslation } from 'react-i18next';
import { useTheme } from '../context/ThemeContext';
import { useLanguage } from '../context/LanguageContext';
import Header, { SourceLinks } from '../components/Header';
import Card, { InfoRow } from '../components/Card';
import { loadStateWithEnrichment } from '../services/dataService';
import { getDistrictsForState } from '../data/stateGk';

export default function StateDetailScreen({ route, navigation }) {
  const { stateId, districtId } = route.params;
  const { theme } = useTheme();
  const { t: translate, language } = useLanguage();
  const { t } = useTranslation();
  const [state, setState] = useState(null);
  const [loading, setLoading] = useState(true);
  const [activeCategory, setActiveCategory] = useState('overview');
  const styles = createStyles(theme);

  useEffect(() => {
    loadStateWithEnrichment(stateId, language).then((data) => {
      setState(data);
      setLoading(false);
      if (districtId) {
        navigation.navigate('DistrictDetail', { stateId, districtId });
      }
    });
  }, [stateId, language]);

  if (loading) {
    return (
      <View style={[styles.container, styles.center]}>
        <ActivityIndicator size="large" color={theme.colors.primary} />
        <Text style={{ color: theme.colors.textSecondary, marginTop: 12 }}>
          {t('loading')}
        </Text>
      </View>
    );
  }

  if (!state) return null;

  const districts = getDistrictsForState(stateId);
  const categoryContent = state.categories?.find((c) => c.key === activeCategory);

  return (
    <View style={styles.container}>
      <Header
        title={state.name}
        subtitle={state.capital}
        onBack={() => navigation.goBack()}
      />

      <ScrollView contentContainerStyle={styles.scroll}>
        <View style={[styles.banner, { backgroundColor: state.color + '22' }]}>
          <View style={[styles.bannerAccent, { backgroundColor: state.color }]} />
          {state.wikiThumbnail && (
            <Image source={{ uri: state.wikiThumbnail }} style={styles.thumbnail} />
          )}
          <View style={styles.bannerContent}>
            <Text style={styles.bannerTitle}>{translate(state.name)}</Text>
            <Text style={styles.bannerSub}>
              {t('capital')}: {translate(state.capital)}
            </Text>
            <SourceLinks sources={state.sources} />
          </View>
        </View>

        <View style={styles.infoCard}>
          <InfoRow label={t('area')} value={state.area} icon="📐" />
          <InfoRow label={t('population')} value={state.population} icon="👥" />
          <InfoRow label={t('officialLanguage')} value={state.language} icon="🗣️" />
          <InfoRow label={t('literacyRate')} value={state.literacy} icon="📚" />
          <InfoRow label={t('formation')} value={state.formation} icon="📅" />
        </View>

        {state.wikiExtract && (
          <Card title={t('overview')} icon="📋">
            <Text style={styles.bodyText}>{state.wikiExtract}</Text>
          </Card>
        )}

        <Card title={t('overview')} icon="🇮🇳">
          <Text style={styles.bodyText}>{translate(state.overview)}</Text>
        </Card>

        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>
            {t('districts')} ({districts.length})
          </Text>
        </View>

        <View style={styles.districtGrid}>
          {districts.map((d) => (
            <TouchableOpacity
              key={d.id}
              style={[styles.districtChip, { borderColor: state.color }]}
              onPress={() =>
                navigation.navigate('DistrictDetail', {
                  stateId,
                  districtId: d.id,
                })
              }
            >
              <Text style={[styles.districtName, { color: state.color }]}>
                {translate(d.name)}
              </Text>
              {d._placeholder && (
                <Text style={styles.fetchHint}>📡</Text>
              )}
            </TouchableOpacity>
          ))}
        </View>

        <TouchableOpacity
          style={[styles.quizBtn, { backgroundColor: state.color }]}
          onPress={() =>
            navigation.getParent()?.navigate('QuizTab', {
              screen: 'Quiz',
              params: { stateId },
            })
          }
        >
          <Text style={styles.quizBtnText}>🎯 {t('startQuiz')}</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
}

const createStyles = (theme) =>
  StyleSheet.create({
    container: { flex: 1, backgroundColor: theme.colors.background },
    center: { justifyContent: 'center', alignItems: 'center' },
    scroll: { paddingBottom: theme.spacing.xl },
    banner: {
      margin: theme.spacing.md,
      borderRadius: theme.borderRadius.lg,
      overflow: 'hidden',
      flexDirection: 'row',
    },
    bannerAccent: { width: 6 },
    thumbnail: { width: 80, height: 80, borderRadius: 8, margin: theme.spacing.md },
    bannerContent: { flex: 1, padding: theme.spacing.md },
    bannerTitle: {
      fontSize: theme.fontSize.xl,
      fontWeight: '800',
      color: theme.colors.text,
    },
    bannerSub: {
      fontSize: theme.fontSize.sm,
      color: theme.colors.textSecondary,
      marginVertical: 4,
    },
    infoCard: {
      marginHorizontal: theme.spacing.md,
      backgroundColor: theme.colors.surface,
      borderRadius: theme.borderRadius.lg,
      padding: theme.spacing.md,
      ...theme.shadows.card,
    },
    bodyText: {
      fontSize: theme.fontSize.md,
      color: theme.colors.text,
      lineHeight: 24,
    },
    sectionHeader: {
      paddingHorizontal: theme.spacing.md,
      marginTop: theme.spacing.md,
    },
    sectionTitle: {
      fontSize: theme.fontSize.lg,
      fontWeight: '700',
      color: theme.colors.text,
    },
    districtGrid: {
      flexDirection: 'row',
      flexWrap: 'wrap',
      padding: theme.spacing.md,
      gap: theme.spacing.sm,
    },
    districtChip: {
      paddingHorizontal: theme.spacing.md,
      paddingVertical: theme.spacing.sm,
      borderRadius: theme.borderRadius.full,
      borderWidth: 1.5,
      backgroundColor: theme.colors.surface,
      flexDirection: 'row',
      alignItems: 'center',
    },
    districtName: { fontWeight: '600', fontSize: theme.fontSize.sm },
    fetchHint: { marginLeft: 4, fontSize: 12 },
    quizBtn: {
      margin: theme.spacing.md,
      padding: theme.spacing.md,
      borderRadius: theme.borderRadius.md,
      alignItems: 'center',
    },
    quizBtnText: { color: '#FFF', fontWeight: '700', fontSize: theme.fontSize.md },
  });
