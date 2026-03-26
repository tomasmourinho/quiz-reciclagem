export default function IntroScreen({ players, onAddPlayer, onRemovePlayer, onUpdateName, onCycleAvatar, onStart, onOpenModal }) {
  return (
    <div className="screen">
      <div className="container">
        <div className="intro-hero">
          <span className="intro-icon">♻️</span>
          <h1 className="intro-title">Quiz da Reciclagem</h1>
          <p className="intro-sub">Descobre as cores dos ecopontos, boas práticas<br/>e os erros mais comuns em Portugal!</p>
        </div>

        <div className="eco-badges">
          <span className="eco-badge eco-v">🟢 Verde — vidro</span>
          <span className="eco-badge eco-a">🔵 Azul — papel</span>
          <span className="eco-badge eco-am">🟡 Amarelo — plástico</span>
          <span className="eco-badge eco-vm">🔴 Vermelho — pilhas</span>
          <span className="eco-badge eco-c">🟤 Castanho — orgânico</span>
        </div>

        <div className="card">
          <p className="card-title">Quem vai jogar?</p>
          <p className="card-sub">
            {players.length === 1
              ? 'Escreve o teu nome e escolhe o teu emoji.'
              : `Escreve o nome dos ${players.length} jogadores e escolhe o emoji de cada um.`}
          </p>

          <div className="player-count-row">
            <button className="btn-count" onClick={onRemovePlayer} disabled={players.length <= 1}>−</button>
            <span className="count-label">{players.length} jogador{players.length !== 1 ? 'es' : ''}</span>
            <button className="btn-count" onClick={onAddPlayer} disabled={players.length >= 8}>+</button>
          </div>

          <div className="players-grid">
            {players.map((p, i) => (
              <div className="player-input-wrap" key={i}>
                <label>Jogador {i+1}</label>
                <div className="player-avatar-row">
                  <div
                    className="avatar-circle"
                    style={{ background: p.color + '25', borderColor: p.color }}
                    onClick={() => onCycleAvatar(i)}
                    title="Clica para mudar"
                  >
                    {p.avatar}
                  </div>
                  <input
                    className="name-input"
                    type="text"
                    placeholder="Nome..."
                    value={p.name}
                    onChange={e => onUpdateName(i, e.target.value)}
                  />
                </div>
              </div>
            ))}
          </div>

          <div className="intro-actions">
            <button className="btn btn-green" onClick={onStart} style={{width:'100%', fontSize:'19px', padding:'16px'}}>
              Iniciar jogo →
            </button>
            <button className="btn btn-outline" onClick={onOpenModal}>
              ✏️ Gerir perguntas
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
