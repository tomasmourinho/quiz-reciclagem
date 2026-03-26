export default function PodiumScreen({ players, onRestart, onAnotherRound }) {
  const sorted = [...players].sort((a,b) => b.score - a.score);
  const medals = ['🥇','🥈','🥉','4º','5º','6º','7º','8º'];
  const maxScore = Math.max(...sorted.map(p => p.score), 1);

  const pc = Math.min(sorted.length, 3);
  const podiumOrder = pc === 1 ? [0] : pc === 2 ? [1,0] : [1,0,2];
  const blockClass = ['p1','p2','p3'];
  const delays = pc === 1 ? [0] : pc === 2 ? [0.3,0] : [0.3,0,0.5];

  return (
    <div className="screen">
      <div className="container">
        <div className="card">
          <h2 className="podium-title">🏆 Classificação Final</h2>
          <p className="podium-sub">Parabéns a todos os jogadores! 🎉</p>

          <div className="podium-wrap">
            {podiumOrder.map((rank, col) => {
              const p = sorted[rank];
              if (!p) return null;
              return (
                <div key={rank} className="podium-col" style={{animationDelay: delays[col]+'s'}}>
                  <div className="podium-avatar" style={{animationDelay: (delays[col]+0.2)+'s'}}>{p.avatar}</div>
                  <div className="podium-pname">{p.name}</div>
                  <div className="podium-pts">{p.score} pts</div>
                  <div className={`podium-block ${blockClass[rank]}`}>{medals[rank]}</div>
                </div>
              );
            })}
          </div>

          <div className="results-list">
            {sorted.map((p,i) => (
              <div key={i} className="result-row">
                <span className="r-medal">{medals[i]}</span>
                <div className="r-av" style={{background: p.color+'25', borderColor: p.color}}>{p.avatar}</div>
                <div className="r-info">
                  <div className="r-name">{p.name}</div>
                  <div className="r-detail">{p.correct}/{p.totalQ||10} corretas</div>
                </div>
                <div className="r-score">{p.score}</div>
              </div>
            ))}
          </div>

          <div className="chart">
            {sorted.map((p,i) => {
              const pct = Math.round((p.score / maxScore) * 100);
              return (
                <div key={i} className="chart-row">
                  <div className="chart-lbl"><span>{p.avatar}</span>{p.name.split(' ')[0]}</div>
                  <div className="chart-track">
                    <div className="chart-fill" style={{width: pct+'%', background: p.color}}>{p.score}pts</div>
                  </div>
                  <div className="chart-val">{p.correct}/{p.totalQ||10}</div>
                </div>
              );
            })}
          </div>

          <div className="podium-actions">
            <button className="btn btn-green" onClick={onRestart}>Jogar outra vez</button>
            <button className="btn btn-outline" onClick={onAnotherRound}>Só mais uma ronda</button>
          </div>
        </div>
      </div>
    </div>
  );
}
