import React from 'react';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import { useTheme } from '../context/ThemeContext';
import { useLanguage } from '../context/LanguageContext';

export default function StateSelector({ states, selectedId, onSelect, horizontal = true }) {
  const { theme } = useTheme();
  const { t: translate } = useLanguage();
  const styles = createStyles(theme);

  const content = states.map((state) => {
    const isSelected = state.id === selectedId;
    return (
      <TouchableOpacity
        key={state.id}
        onPress={() => onSelect(state)}
        style={[
          horizontal ? styles.chip : styles.gridItem,
          isSelected && { borderColor: state.color || theme.colors.primary, borderWidth: 2 },
        ]}
      >
        <View
          style={[
            styles.colorDot,
            { backgroundColor: state.color || theme.colors.primary },
          ]}
        />
        <Text
          style={[styles.chipText, isSelected && { color: state.color || theme.colors.primary }]}
          numberOfLines={1}
        >
          {translate(state.name)}
        </Text>
        {state.type === 'ut' && (
          <Text style={styles.utBadge}>UT</Text>
        )}
      </TouchableOpacity>
    );
  });

  if (horizontal) {
    return (
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.horizontalContainer}
      >
        {content}
      </ScrollView>
    );
  }

  return <View style={styles.grid}>{content}</View>;
}

const createStyles = (theme) =>
  StyleSheet.create({
    horizontalContainer: {
      paddingHorizontal: theme.spacing.md,
      paddingVertical: theme.spacing.sm,
      gap: theme.spacing.sm,
    },
    chip: {
      flexDirection: 'row',
      alignItems: 'center',
      backgroundColor: theme.colors.surface,
      paddingHorizontal: theme.spacing.md,
      paddingVertical: theme.spacing.sm,
      borderRadius: theme.borderRadius.full,
      marginRight: theme.spacing.sm,
      borderWidth: 1,
      borderColor: theme.colors.border,
    },
    grid: {
      flexDirection: 'row',
      flexWrap: 'wrap',
      padding: theme.spacing.sm,
      gap: theme.spacing.sm,
    },
    gridItem: {
      width: '47%',
      flexDirection: 'row',
      alignItems: 'center',
      backgroundColor: theme.colors.surface,
      padding: theme.spacing.md,
      borderRadius: theme.borderRadius.md,
      borderWidth: 1,
      borderColor: theme.colors.border,
    },
    colorDot: {
      width: 10,
      height: 10,
      borderRadius: 5,
      marginRight: theme.spacing.sm,
    },
    chipText: {
      fontSize: theme.fontSize.sm,
      fontWeight: '600',
      color: theme.colors.text,
      maxWidth: 120,
    },
    utBadge: {
      fontSize: theme.fontSize.xs,
      color: theme.colors.textSecondary,
      marginLeft: 4,
    },
  });
