
import React, { useState, useEffect } from 'react';
import ChoiceScreen from './components/ChoiceScreen';
import Quiz from './components/Quiz';
import AnalyzingScreen from './components/AnalyzingScreen';
import ResultPage from './components/ResultPage';
import LandingPage from './components/LandingPage';
import { AppState, QuizResult } from './types';

const App: React.FC = () => {
  const [view, setView] = useState<AppState>('choice');
  const [quizAnswers, setQuizAnswers] = useState<QuizResult>({});

  // Reset scroll on view change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [view]);

  const handleFinishQuiz = (answers: QuizResult) => {
    setQuizAnswers(answers);
    setView('analyzing');
  };

  const renderView = () => {
    switch (view) {
      case 'choice':
        return <ChoiceScreen onDirect={() => setView('site')} onQuiz={() => setView('quiz')} />;
      case 'quiz':
        return <Quiz onFinish={handleFinishQuiz} onBack={() => setView('choice')} />;
      case 'analyzing':
        return <AnalyzingScreen onComplete={() => setView('result')} />;
      case 'result':
        return (
          <ResultPage 
            answers={quizAnswers} 
            onGoToSite={() => setView('site')} 
          />
        );
      case 'site':
        return <LandingPage />;
      default:
        return <ChoiceScreen onDirect={() => setView('site')} onQuiz={() => setView('quiz')} />;
    }
  };

  return (
    <div className="min-h-screen bg-neutral-950">
      {renderView()}
    </div>
  );
};

export default App;
