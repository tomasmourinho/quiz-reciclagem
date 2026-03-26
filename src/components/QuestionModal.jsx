export default function QuestionModal({ questions, onClose, onChange }) {
  function deleteQ(idx) {
    onChange(questions.filter((_,i) => i !== idx));
  }

  function handleSubmit(e) {
    e.preventDefault();
    const f = e.target;
    const cat  = f.cat.value.trim();
    const q    = f.q.value.trim();
    const opts = [f.opt0.value.trim(), f.opt1.value.trim(), f.opt2.value.trim(), f.opt3.value.trim()];
    const a    = parseInt(f.correct.value);
    const fb   = f.fb.value.trim();

    if (!cat || !q || opts.some(o => !o)) {
      alert('Preenche a categoria, a pergunta e as 4 opções.');
      return;
    }

    onChange([...questions, { cat, q, opts, a, fb, custom: true }]);
    f.reset();
  }

  return (
    <div className="modal-overlay" onClick={e => e.target.classList.contains('modal-overlay') && onClose()}>
      <div className="modal-box">
        <div className="modal-header">
          <h3>✏️ Gerir Perguntas</h3>
          <button className="modal-close" onClick={onClose}>×</button>
        </div>
        <div className="modal-body">
          <div className="q-count-badge">{questions.length} pergunta{questions.length !== 1 ? 's' : ''} no banco</div>

          {questions.map((q,i) => (
            <div key={i} className="q-item">
              <div className="q-item-text">
                <div className="q-item-cat">{q.cat}</div>
                <div className="q-item-q">{q.q}</div>
              </div>
              <button className="btn-del" onClick={() => deleteQ(i)}>Apagar</button>
            </div>
          ))}

          <form className="q-add-form" onSubmit={handleSubmit}>
            <h4>+ Adicionar pergunta</h4>
            <div className="form-row">
              <label>Categoria</label>
              <input name="cat" className="form-input" type="text" placeholder="Ex: Cores dos ecopontos" />
            </div>
            <div className="form-row">
              <label>Pergunta</label>
              <input name="q" className="form-input" type="text" placeholder="Escreve a pergunta..." />
            </div>
            {['A','B','C','D'].map((l,i) => (
              <div key={i} className="form-row">
                <label>Opção {l}</label>
                <input name={`opt${i}`} className="form-input" type="text" placeholder={`Opção ${l}`} />
              </div>
            ))}
            <div className="form-row">
              <label>Resposta correta</label>
              <select name="correct" className="form-input">
                {['A','B','C','D'].map((l,i) => <option key={i} value={i}>Opção {l}</option>)}
              </select>
            </div>
            <div className="form-row">
              <label>Explicação</label>
              <input name="fb" className="form-input" type="text" placeholder="Aparece após a resposta..." />
            </div>
            <button type="submit" className="btn btn-green" style={{width:'100%'}}>+ Adicionar pergunta</button>
          </form>
        </div>
      </div>
    </div>
  );
}
