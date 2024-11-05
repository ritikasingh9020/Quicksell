export async function fetchKanbanData() {
  try {
    const response = await fetch('https://api.quicksell.co/v1/internal/frontend-assignment');
    if (!response.ok) throw new Error('Failed to fetch data');
    return await response.json();
  } catch (error) {
    throw new Error('Network error: ' + error.message);
  }
}