import { useState } from 'react';
import { AVATARS, COLORS, loadAllQuestions, saveCustomQuestions } from './data/questions';
import IntroScreen from './components/IntroScreen';
import SelectScreen from './components/SelectScreen';
import QuizScreen from './components/QuizScreen';
import PodiumScreen from './components/PodiumScreen';
import QuestionModal from './components/QuestionModal';

function shuffle(arr) {
  const a = [...arr];
  for (let i = a.length-1; i > 0; i--) {
    const j = Math.floor(Math.random()*(i+1));
    [a[i],a[j]] = [a[j],a[i]];
  }
  return a;
}

function makePlayer(i) {
  return { name: `Jogador ${i+1}`, avatar: AVATARS[i % AVATARS.length], color: COLORS[i % COLORS.length], score: 0, correct: 0, totalQ: 10, done: false };
}

export default function App() {
  const [screen, setScreen] = useState('intro');
  const [players, setPlayers] = useState(() => [0,1,2,3].map(makePlayer));
  const [avatarIdxs, setAvatarIdxs] = useState([0,1,2,3]);
  const [allQuestions, setAllQuestions] = useState(loadAllQuestions);
  const [showModal, setShowModal] = useState(false);

  const [currentPlayerIdx, setCurrentPlayerIdx] = useState(null);
  const [currentQs, setCurrentQs] = useState([]);
  const [qIdx, setQIdx] = useState(0);
  const [sessionScore, setSessionScore] = useState(0);
  const [sessionCorrect, setSessionCorrect] = useState(0);
  const [sessionTotalQ, setSessionTotalQ] = useState(10);
  const [answered, setAnswered] = useState(null);

  const addPlayer = () => {
    if (players.length >= 8) return;
    const i = players.length;
    setPlayers(p => [...p, makePlayer(i)]);
    setAvatarIdxs(a => [...a, i % AVATARS.length]);
  };

  const removePlayer = () => {
    if (players.length <= 1) return;
    setPlayers(p => p.slice(0,-1));
    setAvatarIdxs(a => a.slice(0,-1));
  };

  const updatePlayerName = (i, name) => {
    setPlayers(p => p.map((pl,idx) => idx===i ? {...pl,name} : pl));
  };

  const cycleAvatar = (i) => {
    const ni = (avatarIdxs[i]+1) % AVATARS.length;
    setAvatarIdxs(a => a.map((v,idx) => idx===i ? ni : v));
    setPlayers(p => p.map((pl,idx) => idx===i ? {...pl, avatar: AVATARS[ni]} : pl));
  };

  const goToSelect = () => {
    setPlayers(p => p.map((pl,i) => ({...pl, name: pl.name.trim() || `Jogador ${i+1}`})));
    setScreen('select');
  };

  const startPlayerQuiz = (idx) => {
    setCurrentPlayerIdx(idx);
    setSessionScore(0);
    setSessionCorrect(0);
    setQIdx(0);
    setAnswered(null);
    const tq = Math.min(10, allQuestions.length);
    setSessionTotalQ(tq);
    setCurrentQs(shuffle(allQuestions).slice(0, tq));
    setScreen('quiz');
  };

  const selectAnswer = (selectedIdx) => {
    if (answered !== null) return;
    const q = currentQs[qIdx];
    const isCorrect = selectedIdx === q.a;
    setAnswered({ selected: selectedIdx, correct: q.a, isCorrect });
    if (isCorrect) {
      setSessionScore(s => s + 10);
      setSessionCorrect(c => c + 1);
    }
  };

  const nextQ = () => {
    if (qIdx + 1 >= sessionTotalQ) {
      const finalScore = sessionScore;
      const finalCorrect = sessionCorrect;
      setPlayers(prev => prev.map((p,i) => i === currentPlayerIdx
        ? { ...p, score: finalScore, correct: finalCorrect, totalQ: sessionTotalQ, done: true }
        : p
      ));
      setAnswered(null);
      setScreen('select');
    } else {
      setQIdx(q => q+1);
      setAnswered(null);
    }
  };

  const restartGame = () => {
    setPlayers(p => p.map(pl => ({...pl, score:0, correct:0, totalQ:10, done:false})));
    setScreen('intro');
  };

  const anotherRound = () => {
    setPlayers(p => p.map(pl => ({...pl, score:0, correct:0, totalQ:10, done:false})));
    setScreen('select');
  };

  const handleQuestionsChange = (newQs) => {
    setAllQuestions(newQs);
    saveCustomQuestions(newQs);
  };

  const currentQ = currentQs[qIdx];
  const currentPlayer = players[currentPlayerIdx];

  return (
    <>
      {screen === 'intro' && (
        <IntroScreen
          players={players}
          onAddPlayer={addPlayer}
          onRemovePlayer={removePlayer}
          onUpdateName={updatePlayerName}
          onCycleAvatar={cycleAvatar}
          onStart={goToSelect}
          onOpenModal={() => setShowModal(true)}
        />
      )}
      {screen === 'select' && (
        <SelectScreen
          players={players}
          onSelectPlayer={startPlayerQuiz}
          onShowPodium={() => setScreen('podium')}
        />
      )}
      {screen === 'quiz' && currentQ && (
        <QuizScreen
          player={currentPlayer}
          question={currentQ}
          qIdx={qIdx}
          totalQ={sessionTotalQ}
          score={sessionScore}
          answered={answered}
          onSelectAnswer={selectAnswer}
          onNext={nextQ}
        />
      )}
      {screen === 'podium' && (
        <PodiumScreen
          players={players}
          onRestart={restartGame}
          onAnotherRound={anotherRound}
        />
      )}
      {showModal && (
        <QuestionModal
          questions={allQuestions}
          onClose={() => setShowModal(false)}
          onChange={handleQuestionsChange}
        />
      )}
    </>
  );
}
