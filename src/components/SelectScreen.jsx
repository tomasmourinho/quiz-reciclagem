export default function SelectScreen({ players, onSelectPlayer, onShowPodium }) {
  const done = players.filter(p => p.done).length;
  const allDone = done === players.length;

  return (
    <div className="screen">
      <div className="container">
        <div className="card">
          <h2 className="select-title">🎮 Quem joga agora?</h2>
          <p className="select-sub">
            {allDone
              ? 'Todos jogaram! Vê a classificação.'
              : `${done} de ${players.length} jogadores concluíram. Quem é o próximo?`}
          </p>

          <div className="player-cards">
            {players.map((p, i) => (
              <div
                key={i}
                className={`player-card${p.done ? ' done' : ''}`}
                onClick={() => !p.done && onSelectPlayer(i)}
              >
                <div className="player-card-left">
                  <div
                    className="avatar-circle"
                    style={{ background: p.color + '25', borderColor: p.color, fontSize: '22px', width: '44px', height: '44px' }}
                  >
                    {p.avatar}
                  </div>
                  <div>
                    <div className="pc-name">{p.name}</div>
                    <div className="pc-status">
                      {p.done
                        ? `${p.correct}/${p.totalQ} corretas · ${p.score} pts`
                        : 'Ainda não jogou'}
                    </div>
                  </div>
                </div>
                <span className={`badge ${p.done ? 'badge-done' : 'badge-wait'}`}>
                  {p.done ? '✓ Feito' : '⏳ A aguardar'}
                </span>
              </div>
            ))}

            {allDone && (
              <button
                className="btn btn-yellow"
                style={{width:'100%', marginTop:'0.5rem', fontSize:'18px', padding:'15px'}}
                onClick={onShowPodium}
              >
                🏆 Ver classificação
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
