import React, { useState, useMemo } from 'react';
import {
  View,
  Text,
  ScrollView,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import { useTranslation } from 'react-i18next';
import { useTheme } from '../context/ThemeContext';
import { useLanguage } from '../context/LanguageContext';
import Header from '../components/Header';
import Card from '../components/Card';
import SettingsPanel from '../components/SettingsPanel';
import { getStates, getStatesOnly, getUTsOnly, getRegionOptions } from '../data/statesMetadata';
import { searchStatesAndDistricts } from '../services/dataService';

export default function StateListScreen({ navigation }) {
  const { theme } = useTheme();
  const { t: translate } = useLanguage();
  const { t } = useTranslation();
  const [query, setQuery] = useState('');
  const [tab, setTab] = useState('states');
  const [activeRegion, setActiveRegion] = useState('all');
  const [settingsOpen, setSettingsOpen] = useState(false);
  const styles = createStyles(theme);

  const states = tab === 'states' ? getStatesOnly() : getUTsOnly();
  const featuredStates = useMemo(() => getStates().filter((s) => s.featured).slice(0, 6), []);
  const regionOptions = useMemo(() => getRegionOptions().map((option) => ({ ...option, label: t(`regions.${option.id}`) })), [t]);
  const searchResults = useMemo(
    () => (query ? searchStatesAndDistricts(query) : []),
    [query],
  );

  const visibleStates = states.filter((s) => activeRegion === 'all' || s.region === activeRegion);
  const filtered = query
    ? searchResults.filter((r) => {
        if (activeRegion !== 'all' && r.region !== activeRegion) return false;
        return r.type === 'state' || (tab === 'ut' && r.type === 'state');
      })
    : visibleStates;

  const renderItem = (item) => {
    if (item.type === 'district') {
      return (
        <Card
          key={`${item.stateId}-${item.id}`}
          title={item.name}
          subtitle={item.stateName}
          icon="📍"
          color={item.color}
          badge={t('district')}
          onPress={() =>
            navigation.navigate('StateDetail', {
              stateId: item.stateId,
              districtId: item.id,
            })
          }
        />
      );
    }

    const state = item.id ? item : item;
    const stateId = state.id;
    return (
      <Card
        key={stateId}
        title={state.name}
        subtitle={state.capital}
        icon={state.type === 'ut' ? '🏙️' : '🗺️'}
        color={state.color}
        badge={state.code}
        onPress={() => navigation.navigate('StateDetail', { stateId })}
      />
    );
  };

  return (
    <View style={styles.container}>
      <Header
        title={t('allStates')}
        showSettings
        onSettings={() => setSettingsOpen(true)}
      />

      <View style={styles.searchWrap}>
        <TextInput
          style={styles.searchInput}
          placeholder={t('search')}
          placeholderTextColor={theme.colors.textSecondary}
          value={query}
          onChangeText={setQuery}
        />
      </View>

      {!query && (
        <>
          {featuredStates.length > 0 && (
            <View style={styles.featuredCard}>
              <Text style={styles.featuredTitle}>{t('featuredStates')}</Text>
              <View style={styles.featuredRow}>
                {featuredStates.map((state) => (
                  <TouchableOpacity
                    key={state.id}
                    style={styles.featuredChip}
                    onPress={() => navigation.navigate('StateDetail', { stateId: state.id })}
                  >
                    <Text style={styles.featuredChipText}>{translate(state.name)}</Text>
                  </TouchableOpacity>
                ))}
              </View>
            </View>
          )}
          <View style={styles.regionWrap}>
            <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.regionRow}>
              {regionOptions.map((option) => (
                <TouchableOpacity
                  key={option.id}
                  style={[styles.regionChip, activeRegion === option.id && styles.regionChipActive]}
                  onPress={() => setActiveRegion(option.id)}
                >
                  <Text style={[styles.regionChipText, activeRegion === option.id && styles.regionChipTextActive]}>
                    {option.label}
                  </Text>
                </TouchableOpacity>
              ))}
            </ScrollView>
          </View>
          <View style={styles.tabs}>
          <TouchableOpacity
            style={[styles.tab, tab === 'states' && styles.tabActive]}
            onPress={() => setTab('states')}
          >
            <Text style={[styles.tabText, tab === 'states' && styles.tabTextActive]}>
              {t('states')} (28)
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.tab, tab === 'ut' && styles.tabActive]}
            onPress={() => setTab('ut')}
          >
            <Text style={[styles.tabText, tab === 'ut' && styles.tabTextActive]}>
              {t('unionTerritories')} (8)
            </Text>
          </TouchableOpacity>
        </View>
        </>
      )}

      <ScrollView contentContainerStyle={styles.list}>
        {query && searchResults.length === 0 && (
          <Text style={styles.empty}>{t('noResults')}</Text>
        )}
        {(query ? searchResults : filtered).map((item) =>
          query ? renderItem(item) : renderItem(item),
        )}
      </ScrollView>

      <SettingsPanel visible={settingsOpen} onClose={() => setSettingsOpen(false)} />
    </View>
  );
}

const createStyles = (theme) =>
  StyleSheet.create({
    container: { flex: 1, backgroundColor: theme.colors.background },
    searchWrap: { padding: theme.spacing.md, paddingBottom: 0 },
    searchInput: {
      backgroundColor: theme.colors.surface,
      borderRadius: theme.borderRadius.md,
      padding: theme.spacing.md,
      fontSize: theme.fontSize.md,
      color: theme.colors.text,
      borderWidth: 1,
      borderColor: theme.colors.border,
    },
    regionWrap: {
      paddingHorizontal: theme.spacing.md,
      paddingTop: theme.spacing.sm,
    },
    regionRow: {
      gap: theme.spacing.sm,
    },
    regionChip: {
      paddingHorizontal: theme.spacing.md,
      paddingVertical: theme.spacing.sm,
      borderRadius: theme.borderRadius.full,
      backgroundColor: theme.colors.surface,
      borderWidth: 1,
      borderColor: theme.colors.border,
    },
    regionChipActive: {
      backgroundColor: theme.colors.primary,
      borderColor: theme.colors.primary,
    },
    regionChipText: {
      color: theme.colors.text,
      fontWeight: '600',
      fontSize: theme.fontSize.sm,
    },
    regionChipTextActive: {
      color: '#FFF',
    },
    featuredCard: {
      marginHorizontal: theme.spacing.md,
      marginTop: theme.spacing.sm,
      padding: theme.spacing.md,
      borderRadius: theme.borderRadius.lg,
      backgroundColor: theme.colors.surface,
      borderWidth: 1,
      borderColor: theme.colors.border,
    },
    featuredTitle: {
      fontSize: theme.fontSize.md,
      fontWeight: '700',
      color: theme.colors.text,
      marginBottom: theme.spacing.sm,
    },
    featuredRow: {
      flexDirection: 'row',
      flexWrap: 'wrap',
      gap: theme.spacing.sm,
    },
    featuredChip: {
      backgroundColor: theme.colors.primary + '16',
      paddingHorizontal: theme.spacing.sm,
      paddingVertical: theme.spacing.xs,
      borderRadius: theme.borderRadius.full,
    },
    featuredChipText: {
      color: theme.colors.primary,
      fontWeight: '600',
      fontSize: theme.fontSize.sm,
    },
    tabs: {
      flexDirection: 'row',
      padding: theme.spacing.md,
      gap: theme.spacing.sm,
    },
    tab: {
      flex: 1,
      padding: theme.spacing.sm,
      borderRadius: theme.borderRadius.md,
      backgroundColor: theme.colors.surface,
      alignItems: 'center',
      borderWidth: 1,
      borderColor: theme.colors.border,
    },
    tabActive: {
      backgroundColor: theme.colors.primary,
      borderColor: theme.colors.primary,
    },
    tabText: {
      fontWeight: '600',
      color: theme.colors.text,
      fontSize: theme.fontSize.sm,
    },
    tabTextActive: { color: '#FFF' },
    list: { padding: theme.spacing.md, paddingTop: 0 },
    empty: {
      textAlign: 'center',
      color: theme.colors.textSecondary,
      marginTop: theme.spacing.xl,
    },
  });
