export function createQuizSession(questions, options = {}) {
  const { timePerQuestion = 30, shuffle = true } = options;
  let pool = [...questions];
  if (shuffle) {
    pool = pool.sort(() => Math.random() - 0.5);
  }
  return {
    questions: pool,
    currentIndex: 0,
    score: 0,
    answers: [],
    timePerQuestion,
    timeLeft: timePerQuestion,
    isComplete: false,
    startedAt: Date.now(),
  };
}

export function getCurrentQuestion(session) {
  if (!session || session.isComplete) return null;
  return session.questions[session.currentIndex];
}

export function submitAnswer(session, selectedAnswer) {
  const question = getCurrentQuestion(session);
  if (!question) return session;

  const lang = 'en';
  const isCorrect =
    JSON.stringify(selectedAnswer) === JSON.stringify(question.correctAnswer) ||
    selectedAnswer?.en === question.correctAnswer?.en;

  const updated = {
    ...session,
    score: isCorrect ? session.score + 1 : session.score,
    answers: [
      ...session.answers,
      { questionId: question.id, selected: selectedAnswer, correct: isCorrect },
    ],
  };

  if (updated.currentIndex >= updated.questions.length - 1) {
    return { ...updated, isComplete: true, finishedAt: Date.now() };
  }

  return {
    ...updated,
    currentIndex: updated.currentIndex + 1,
    timeLeft: updated.timePerQuestion,
  };
}

export function calculateScore(session) {
  if (!session) return { score: 0, total: 0, percentage: 0 };
  const total = session.questions.length;
  const score = session.score;
  return {
    score,
    total,
    percentage: total > 0 ? Math.round((score / total) * 100) : 0,
    timeTaken: session.finishedAt
      ? Math.round((session.finishedAt - session.startedAt) / 1000)
      : 0,
  };
}

export function getGrade(percentage) {
  if (percentage >= 90) return { en: 'Excellent!', hi: 'उत्कृष्ट!' };
  if (percentage >= 70) return { en: 'Good Job!', hi: 'अच्छा काम!' };
  if (percentage >= 50) return { en: 'Keep Learning!', hi: 'सीखते रहें!' };
  return { en: 'Try Again!', hi: 'पुनः प्रयास करें!' };
}

export function tickTimer(session) {
  if (!session || session.isComplete) return session;
  const timeLeft = session.timeLeft - 1;
  if (timeLeft <= 0) {
    return submitAnswer(session, null);
  }
  return { ...session, timeLeft };
}
