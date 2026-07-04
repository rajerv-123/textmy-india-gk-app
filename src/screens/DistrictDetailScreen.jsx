import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  ActivityIndicator,
  Image,
  Linking,
  TouchableOpacity,
} from 'react-native';
import { useTranslation } from 'react-i18next';
import { useTheme } from '../context/ThemeContext';
import { useLanguage } from '../context/LanguageContext';
import Header, { SourceLinks } from '../components/Header';
import Card, { InfoRow } from '../components/Card';
import { loadDistrictDetail } from '../services/dataService';

export default function DistrictDetailScreen({ route, navigation }) {
  const { stateId, districtId } = route.params;
  const { theme } = useTheme();
  const { t: translate, language } = useLanguage();
  const { t } = useTranslation();
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const styles = createStyles(theme);

  useEffect(() => {
    setLoading(true);
    loadDistrictDetail(stateId, districtId, language).then((result) => {
      setData(result);
      setLoading(false);
    });
  }, [stateId, districtId, language]);

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

  if (!data?.district) return null;

  const { district, categories, state } = data;

  const renderContent = (cat) => {
    if (cat.isList && Array.isArray(cat.content)) {
      return cat.content.map((item, i) => (
        <View key={i} style={styles.listItem}>
          <Text style={styles.bullet}>•</Text>
          <Text style={styles.bodyText}>{translate(item)}</Text>
        </View>
      ));
    }
    if (typeof cat.content === 'object' && !cat.content.en) {
      return Object.entries(cat.content).map(([k, v]) => (
        <Text key={k} style={styles.bodyText}>
          {typeof v === 'object' ? translate(v) : v}
        </Text>
      ));
    }
    return <Text style={styles.bodyText}>{translate(cat.content)}</Text>;
  };

  return (
    <View style={styles.container}>
      <Header
        title={district.name}
        subtitle={state?.name}
        onBack={() => navigation.goBack()}
      />

      <ScrollView contentContainerStyle={styles.scroll}>
        {(district._thumbnail || district._wikiUrl) && (
          <View style={styles.wikiBanner}>
            {district._thumbnail && (
              <Image source={{ uri: district._thumbnail }} style={styles.thumbnail} />
            )}
            {district._enriched && (
              <Text style={styles.enrichedBadge}>📡 Loaded from Wikipedia</Text>
            )}
          </View>
        )}

        <View style={styles.infoCard}>
          {district.area && <InfoRow label={t('area')} value={district.area} icon="📐" />}
          {district.population && (
            <InfoRow label={t('population')} value={district.population} icon="👥" />
          )}
          {district.headquarters && (
            <InfoRow label={t('headquarters')} value={district.headquarters} icon="🏛️" />
          )}
          {district.blocks && (
            <InfoRow
              label={t('blocks')}
              value={{ en: String(district.blocks), hi: String(district.blocks) }}
              icon="🗂️"
            />
          )}
        </View>

        <SourceLinks
          sources={{
            wikipedia: district._wikiUrl || district.sources?.wikipedia,
            govt: district.sources?.govt,
          }}
          style={{ marginHorizontal: theme.spacing.md, marginBottom: theme.spacing.md }}
        />

        {categories.map((cat) => (
          <Card
            key={cat.key}
            title={t(cat.key) !== cat.key ? t(cat.key) : cat.key}
            icon={cat.icon}
            color={state?.color}
          >
            {renderContent(cat)}
            {cat.link && (
              <TouchableOpacity onPress={() => Linking.openURL(cat.link)}>
                <Text style={[styles.link, { color: theme.colors.primary }]}>
                  {t('readMore')} →
                </Text>
              </TouchableOpacity>
            )}
          </Card>
        ))}
      </ScrollView>
    </View>
  );
}

const createStyles = (theme) =>
  StyleSheet.create({
    container: { flex: 1, backgroundColor: theme.colors.background },
    center: { justifyContent: 'center', alignItems: 'center' },
    scroll: { paddingBottom: theme.spacing.xl },
    wikiBanner: { alignItems: 'center', padding: theme.spacing.md },
    thumbnail: {
      width: '100%',
      height: 180,
      borderRadius: theme.borderRadius.lg,
    },
    enrichedBadge: {
      marginTop: theme.spacing.sm,
      color: theme.colors.textSecondary,
      fontSize: theme.fontSize.sm,
    },
    infoCard: {
      marginHorizontal: theme.spacing.md,
      backgroundColor: theme.colors.surface,
      borderRadius: theme.borderRadius.lg,
      padding: theme.spacing.md,
      marginBottom: theme.spacing.md,
      ...theme.shadows.card,
    },
    bodyText: {
      fontSize: theme.fontSize.md,
      color: theme.colors.text,
      lineHeight: 24,
      flex: 1,
    },
    listItem: { flexDirection: 'row', marginBottom: theme.spacing.sm },
    bullet: {
      color: theme.colors.primary,
      fontWeight: '700',
      marginRight: theme.spacing.sm,
      fontSize: theme.fontSize.lg,
    },
    link: { marginTop: theme.spacing.sm, fontWeight: '600' },
  });
