const Filter = ({filter, setFilter, setSort, categoryFilter, setCategoryFilter}) => {
  return (
    <div className="filter">
      <h2>Filtrar:</h2>
      <div className="filter-options">
        <div>
            <p>Status:</p>
            <select value={filter} onChange={(e) => setFilter(e.target.value)}>
                <option value="all">Todas</option>
                <option value="completed">Completas</option>
                <option value="incompleted">Incompletas</option>
            </select>
        </div>
        <div>
            <p>Ordem Alfabetica:</p>
            <button onClick={() => setSort("A-Z")} >A-Z</button>
            <button onClick={() => setSort("Z-A")}>Z-A</button>
        </div>
         <div>
        <p>Categoria:</p>
        <select value={categoryFilter} onChange={(e) => setCategoryFilter(e.target.value)}>
          <option value="Todas">Todas</option>
          <option value="Trabalho">Trabalho</option>
          <option value="Pessoal">Pessoal</option>
          <option value="Estudos">Estudos</option>
        </select>
      </div>
      </div>
    </div>
  )
};

export default Filter
