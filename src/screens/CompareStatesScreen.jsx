import React, { useMemo, useState } from 'react';
import { View, Text, ScrollView, TouchableOpacity, StyleSheet } from 'react-native';
import { useTranslation } from 'react-i18next';
import { useTheme } from '../context/ThemeContext';
import { useLanguage } from '../context/LanguageContext';
import Header from '../components/Header';
import Card from '../components/Card';
import { getStates } from '../data/statesMetadata';

export default function CompareStatesScreen({ navigation }) {
  const { theme } = useTheme();
  const { t: translate } = useLanguage();
  const { t } = useTranslation();
  const [selectedIds, setSelectedIds] = useState([]);
  const styles = createStyles(theme);

  const states = useMemo(() => getStates(), []);
  const selectedStates = useMemo(
    () => states.filter((state) => selectedIds.includes(state.id)),
    [selectedIds, states],
  );

  const toggleState = (id) => {
    setSelectedIds((prev) => {
      if (prev.includes(id)) return prev.filter((item) => item !== id);
      if (prev.length >= 2) return [...prev.slice(1), id];
      return [...prev, id];
    });
  };

  const comparisonRows = [
    { key: 'capital', label: t('capital') },
    { key: 'area', label: t('area') },
    { key: 'population', label: t('population') },
    { key: 'literacy', label: t('literacyRate') },
    { key: 'region', label: t('region') },
  ];

  return (
    <View style={styles.container}>
      <Header title={t('compareStates')} subtitle={t('compareSubtitle')} onBack={() => navigation.goBack()} />

      <ScrollView contentContainerStyle={styles.scroll}>
        <View style={styles.infoBox}>
          <Text style={styles.infoTitle}>{t('selectTwoStates')}</Text>
          <Text style={styles.infoText}>{t('compareSubtitle')}</Text>
        </View>

        <View style={styles.grid}>
          {states.map((state) => {
            const isSelected = selectedIds.includes(state.id);
            return (
              <TouchableOpacity
                key={state.id}
                onPress={() => toggleState(state.id)}
                style={[styles.stateCard, isSelected && styles.stateCardSelected, { borderColor: state.color }]}
              >
                <Text style={styles.stateName}>{translate(state.name)}</Text>
                <Text style={styles.stateMeta}>{translate(state.capital)}</Text>
                {isSelected && <Text style={styles.selectedBadge}>{t('selected')}</Text>}
              </TouchableOpacity>
            );
          })}
        </View>

        {selectedStates.length === 2 && (
          <View style={styles.compareCard}>
            <Text style={styles.compareTitle}>{t('comparison')}</Text>
            <View style={styles.compareHeader}>
              {selectedStates.map((state) => (
                <View key={state.id} style={styles.compareCol}>
                  <Text style={styles.compareName}>{translate(state.name)}</Text>
                  <Text style={styles.compareCode}>{state.code}</Text>
                </View>
              ))}
            </View>
            {comparisonRows.map((row) => (
              <View key={row.key} style={styles.row}>
                <Text style={styles.rowLabel}>{row.label}</Text>
                <Text style={styles.rowValue}>{translate(selectedStates[0][row.key]) || '—'}</Text>
                <Text style={styles.rowValue}>{translate(selectedStates[1][row.key]) || '—'}</Text>
              </View>
            ))}
            <TouchableOpacity style={styles.resetBtn} onPress={() => setSelectedIds([])}>
              <Text style={styles.resetBtnText}>{t('resetSelection')}</Text>
            </TouchableOpacity>
          </View>
        )}
      </ScrollView>
    </View>
  );
}

const createStyles = (theme) =>
  StyleSheet.create({
    container: { flex: 1, backgroundColor: theme.colors.background },
    scroll: { padding: theme.spacing.md, paddingBottom: theme.spacing.xl },
    infoBox: {
      backgroundColor: theme.colors.surface,
      borderRadius: theme.borderRadius.lg,
      padding: theme.spacing.md,
      marginBottom: theme.spacing.md,
      ...theme.shadows.card,
    },
    infoTitle: { fontSize: theme.fontSize.lg, fontWeight: '700', color: theme.colors.text },
    infoText: { marginTop: 4, color: theme.colors.textSecondary, lineHeight: 20 },
    grid: { flexDirection: 'row', flexWrap: 'wrap', gap: theme.spacing.sm },
    stateCard: {
      width: '48%',
      backgroundColor: theme.colors.surface,
      borderRadius: theme.borderRadius.md,
      padding: theme.spacing.md,
      borderWidth: 1.5,
      ...theme.shadows.card,
    },
    stateCardSelected: {
      transform: [{ scale: 1.01 }],
    },
    stateName: { fontSize: theme.fontSize.md, fontWeight: '700', color: theme.colors.text },
    stateMeta: { marginTop: 4, color: theme.colors.textSecondary, fontSize: theme.fontSize.sm },
    selectedBadge: {
      marginTop: 8,
      alignSelf: 'flex-start',
      backgroundColor: theme.colors.primary + '16',
      color: theme.colors.primary,
      paddingHorizontal: 8,
      paddingVertical: 4,
      borderRadius: theme.borderRadius.full,
      fontWeight: '700',
      fontSize: theme.fontSize.xs,
    },
    compareCard: {
      marginTop: theme.spacing.lg,
      backgroundColor: theme.colors.surface,
      borderRadius: theme.borderRadius.lg,
      padding: theme.spacing.md,
      ...theme.shadows.card,
    },
    compareTitle: { fontSize: theme.fontSize.lg, fontWeight: '700', color: theme.colors.text },
    compareHeader: { flexDirection: 'row', marginTop: theme.spacing.md, gap: theme.spacing.sm },
    compareCol: { flex: 1 },
    compareName: { fontSize: theme.fontSize.md, fontWeight: '700', color: theme.colors.text },
    compareCode: { color: theme.colors.textSecondary, marginTop: 2 },
    row: {
      flexDirection: 'row',
      alignItems: 'center',
      paddingVertical: theme.spacing.sm,
      borderTopWidth: 1,
      borderTopColor: theme.colors.border,
      gap: theme.spacing.sm,
    },
    rowLabel: { flex: 1, fontWeight: '600', color: theme.colors.textSecondary },
    rowValue: { flex: 1, color: theme.colors.text, fontWeight: '600' },
    resetBtn: {
      marginTop: theme.spacing.md,
      alignSelf: 'flex-start',
      backgroundColor: theme.colors.primary,
      paddingHorizontal: theme.spacing.md,
      paddingVertical: theme.spacing.sm,
      borderRadius: theme.borderRadius.md,
    },
    resetBtnText: { color: '#FFF', fontWeight: '700' },
  });
