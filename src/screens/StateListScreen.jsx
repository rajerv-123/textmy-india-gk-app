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
import { getStatesOnly, getUTsOnly } from '../data/statesMetadata';
import { searchStatesAndDistricts } from '../services/dataService';

export default function StateListScreen({ navigation }) {
  const { theme } = useTheme();
  const { t: translate } = useLanguage();
  const { t } = useTranslation();
  const [query, setQuery] = useState('');
  const [tab, setTab] = useState('states');
  const [settingsOpen, setSettingsOpen] = useState(false);
  const styles = createStyles(theme);

  const states = tab === 'states' ? getStatesOnly() : getUTsOnly();
  const searchResults = useMemo(
    () => (query ? searchStatesAndDistricts(query) : []),
    [query],
  );

  const filtered = query
    ? searchResults.filter((r) => r.type === 'state' || (tab === 'ut' && r.type === 'state'))
    : states.filter((s) => {
        if (!query) return true;
        const q = query.toLowerCase();
        return s.name.en.toLowerCase().includes(q) || s.name.hi.includes(q);
      });

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
