import React, { useState, useEffect, useRef } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from 'react-native';
import { useTranslation } from 'react-i18next';
import { useTheme } from '../context/ThemeContext';
import { useLanguage } from '../context/LanguageContext';
import Header from '../components/Header';
import Card from '../components/Card';
import {
  createQuizSession,
  getCurrentQuestion,
  submitAnswer,
  calculateScore,
  getGrade,
  tickTimer,
} from '../utils/quizEngine';
import { getNationalQuizzes } from '../data/nationalGk';
import { getStateQuizzes } from '../data/stateGk';
import { getStates } from '../data/statesMetadata';

export default function QuizScreen({ route, navigation }) {
  const { stateId } = route.params || {};
  const { theme } = useTheme();
  const { t: translate } = useLanguage();
  const { t } = useTranslation();
  const styles = createStyles(theme);

  const [mode, setMode] = useState(stateId ? 'playing' : 'select');
  const [session, setSession] = useState(null);
  const [selected, setSelected] = useState(null);
  const [feedback, setFeedback] = useState(null);
  const timerRef = useRef(null);

  const startQuiz = (type, id) => {
    let questions = [];
    if (type === 'national') {
      questions = getNationalQuizzes().slice(0, 10);
    } else if (type === 'state' && id) {
      questions = getStateQuizzes(id);
    }
    setSession(createQuizSession(questions, { timePerQuestion: 30 }));
    setMode('playing');
    setSelected(null);
    setFeedback(null);
  };

  useEffect(() => {
    if (stateId) startQuiz('state', stateId);
  }, [stateId]);

  useEffect(() => {
    if (mode === 'playing' && session && !session.isComplete) {
      timerRef.current = setInterval(() => {
        setSession((prev) => tickTimer(prev));
      }, 1000);
    }
    return () => clearInterval(timerRef.current);
  }, [mode, session?.currentIndex, session?.isComplete]);

  const question = session ? getCurrentQuestion(session) : null;

  const handleSubmit = () => {
    if (!selected || !session) return;
    const isCorrect =
      selected.en === question.correctAnswer.en ||
      JSON.stringify(selected) === JSON.stringify(question.correctAnswer);
    setFeedback(isCorrect ? 'correct' : 'wrong');
    setTimeout(() => {
      setSession(submitAnswer(session, selected));
      setSelected(null);
      setFeedback(null);
    }, 800);
  };

  if (mode === 'select') {
    return (
      <View style={styles.container}>
        <Header title={t('quizzes')} onBack={() => navigation.goBack()} />
        <ScrollView contentContainerStyle={styles.scroll}>
          <Card
            title={t('nationalGk')}
            subtitle={`10 ${t('questions')}`}
            icon="🇮🇳"
            color={theme.colors.primary}
            onPress={() => startQuiz('national')}
          />
          <Text style={styles.sectionTitle}>{t('selectState')}</Text>
          {getStates()
            .filter((s) => ['bihar', 'kerala', 'maharashtra', 'delhi'].includes(s.id))
            .map((s) => (
              <Card
                key={s.id}
                title={s.name}
                icon="🗺️"
                color={s.color}
                onPress={() => startQuiz('state', s.id)}
              />
            ))}
        </ScrollView>
      </View>
    );
  }

  if (session?.isComplete) {
    const result = calculateScore(session);
    const grade = getGrade(result.percentage);
    return (
      <View style={[styles.container, styles.center]}>
        <Text style={styles.completeEmoji}>🎉</Text>
        <Text style={styles.completeTitle}>{t('quizComplete')}</Text>
        <Text style={styles.scoreText}>
          {result.score}/{result.total} ({result.percentage}%)
        </Text>
        <Text style={styles.gradeText}>{translate(grade)}</Text>
        <TouchableOpacity
          style={[styles.btn, { backgroundColor: theme.colors.primary }]}
          onPress={() => {
            setMode('select');
            setSession(null);
          }}
        >
          <Text style={styles.btnText}>{t('tryAgain')}</Text>
        </TouchableOpacity>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Header
        title={t('quizzes')}
        subtitle={`${session.currentIndex + 1}/${session.questions.length}`}
        onBack={() => {
          setMode('select');
          setSession(null);
        }}
      />

      <View style={styles.progressBar}>
        <View
          style={[
            styles.progressFill,
            {
              width: `${((session.currentIndex + 1) / session.questions.length) * 100}%`,
              backgroundColor: theme.colors.primary,
            },
          ]}
        />
      </View>

      <View style={styles.timerRow}>
        <Text style={styles.timerLabel}>{t('timeLeft')}: {session.timeLeft}s</Text>
        <Text style={styles.scoreLabel}>{t('score')}: {session.score}</Text>
      </View>

      {question && (
        <ScrollView contentContainerStyle={styles.quizContent}>
          <Text style={styles.question}>{translate(question.question)}</Text>

          {question.options.map((opt, i) => {
            const isSelected = selected?.en === opt.en;
            let bg = theme.colors.surface;
            if (feedback && isSelected) {
              bg = feedback === 'correct' ? theme.colors.success : theme.colors.error;
            } else if (isSelected) {
              bg = theme.colors.primary + '33';
            }
            return (
              <TouchableOpacity
                key={i}
                style={[styles.option, { backgroundColor: bg, borderColor: theme.colors.border }]}
                onPress={() => !feedback && setSelected(opt)}
                disabled={!!feedback}
              >
                <Text style={[styles.optionText, feedback && isSelected && { color: '#FFF' }]}>
                  {String.fromCharCode(65 + i)}. {translate(opt)}
                </Text>
              </TouchableOpacity>
            );
          })}

          <TouchableOpacity
            style={[
              styles.btn,
              {
                backgroundColor: selected ? theme.colors.primary : theme.colors.border,
              },
            ]}
            onPress={handleSubmit}
            disabled={!selected || !!feedback}
          >
            <Text style={styles.btnText}>
              {session.currentIndex < session.questions.length - 1
                ? t('nextQuestion')
                : t('submitAnswer')}
            </Text>
          </TouchableOpacity>
        </ScrollView>
      )}
    </View>
  );
}

const createStyles = (theme) =>
  StyleSheet.create({
    container: { flex: 1, backgroundColor: theme.colors.background },
    center: { justifyContent: 'center', alignItems: 'center', padding: theme.spacing.lg },
    scroll: { padding: theme.spacing.md },
    sectionTitle: {
      fontSize: theme.fontSize.lg,
      fontWeight: '700',
      color: theme.colors.text,
      marginVertical: theme.spacing.md,
    },
    progressBar: {
      height: 4,
      backgroundColor: theme.colors.border,
      marginHorizontal: theme.spacing.md,
    },
    progressFill: { height: '100%' },
    timerRow: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      padding: theme.spacing.md,
    },
    timerLabel: { color: theme.colors.textSecondary, fontWeight: '600' },
    scoreLabel: { color: theme.colors.primary, fontWeight: '700' },
    quizContent: { padding: theme.spacing.md },
    question: {
      fontSize: theme.fontSize.lg,
      fontWeight: '700',
      color: theme.colors.text,
      marginBottom: theme.spacing.lg,
      lineHeight: 28,
    },
    option: {
      padding: theme.spacing.md,
      borderRadius: theme.borderRadius.md,
      borderWidth: 1,
      marginBottom: theme.spacing.sm,
    },
    optionText: { fontSize: theme.fontSize.md, color: theme.colors.text },
    btn: {
      padding: theme.spacing.md,
      borderRadius: theme.borderRadius.md,
      alignItems: 'center',
      marginTop: theme.spacing.md,
    },
    btnText: { color: '#FFF', fontWeight: '700', fontSize: theme.fontSize.md },
    completeEmoji: { fontSize: 64 },
    completeTitle: {
      fontSize: theme.fontSize.xxl,
      fontWeight: '800',
      color: theme.colors.text,
      marginTop: theme.spacing.md,
    },
    scoreText: {
      fontSize: theme.fontSize.xl,
      color: theme.colors.primary,
      fontWeight: '700',
      marginTop: theme.spacing.sm,
    },
    gradeText: {
      fontSize: theme.fontSize.lg,
      color: theme.colors.textSecondary,
      marginTop: theme.spacing.sm,
      marginBottom: theme.spacing.lg,
    },
  });
