const LABELS = ['A','B','C','D'];

export default function QuizScreen({ player, question, qIdx, totalQ, score, answered, onSelectAnswer, onNext }) {
  const pct = (qIdx / totalQ) * 100;

  function getOptClass(i) {
    if (!answered) return `opt-btn opt-${i}`;
    if (i === answered.correct) return 'opt-btn opt-correct';
    if (i === answered.selected && !answered.isCorrect) return 'opt-btn opt-wrong';
    return 'opt-btn opt-reveal';
  }

  return (
    <div className="screen">
      <div className="quiz-top">
        <div className="quiz-meta">
          <div className="player-chip">
            <div className="chip-av" style={{ background: player.color + '30' }}>{player.avatar}</div>
            <span>{player.name}</span>
          </div>
          <div className="score-chip">⭐ {score} pts</div>
          <span className="q-counter">{qIdx+1}/{totalQ}</span>
        </div>
        <div className="progress-track">
          <div className="progress-fill" style={{ width: pct + '%' }} />
        </div>
      </div>

      <div className="container">
        <div className="card" style={{marginBottom:'1rem'}}>
          <div className="q-cat">{question.cat}</div>
          <div className="q-text">{question.q}</div>
        </div>

        <div className="options">
          {question.opts.map((opt, i) => (
            <button
              key={i}
              className={getOptClass(i)}
              onClick={() => onSelectAnswer(i)}
              disabled={!!answered}
            >
              <span className="opt-lbl">{LABELS[i]}</span>
              {opt}
            </button>
          ))}
        </div>

        {answered && (
          <div className={`feedback ${answered.isCorrect ? 'ok' : 'ko'}`}>
            {answered.isCorrect ? '✅ ' : '❌ '}{question.fb}
          </div>
        )}

        {answered && (
          <button className="btn btn-green btn-next" onClick={onNext}>
            {qIdx < totalQ - 1 ? 'Próxima pergunta →' : 'Ver resultado 🏁'}
          </button>
        )}
      </div>
    </div>
  );
}
