const state = {
  filter: 'all',   // all | active | completed
  query: ''
};
 
// ===== Фильтрация: вкладка + поиск через одну функцию =====
function getFilteredTodos() {
  let result = todos;
 
  if (state.filter === 'active') {
    result = result.filter(t => t.completed === false);
  }
  if (state.filter === 'completed') {
    result = result.filter(t => t.completed === true);
  }
  if (state.query !== '') {
    result = result.filter(t =>
      t.todo.toLowerCase().includes(state.query.toLowerCase())
    );
  }
 
  return result;
}

function escapeHtml(text) {
  return text
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}