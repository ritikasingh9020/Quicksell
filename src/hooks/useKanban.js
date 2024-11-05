import { useContext, useEffect } from 'react';
import { KanbanContext } from '../context/KanbanContext';
import { fetchKanbanData } from '../utils/api';
import { groupTickets, sortTickets } from '../utils/helpers';

export function useKanban() {
  const { state, dispatch } = useContext(KanbanContext);

  useEffect(() => {
    async function loadData() {
      try {
        const data = await fetchKanbanData();
        dispatch({ type: 'SET_DATA', payload: data });
      } catch (error) {
        dispatch({ type: 'SET_ERROR', payload: error.message });
      }
    }
    loadData();
  }, [dispatch]);

  const setGrouping = (grouping) => {
    dispatch({ type: 'SET_GROUPING', payload: grouping });
  };

  const setSorting = (sorting) => {
    dispatch({ type: 'SET_SORTING', payload: sorting });
  };

  const organizedTickets = groupTickets(state.tickets, state.grouping);
  const sortedTickets = sortTickets(organizedTickets, state.sorting);

  return {
    tickets: sortedTickets,
    users: state.users,
    grouping: state.grouping,
    sorting: state.sorting,
    loading: state.loading,
    error: state.error,
    setGrouping,
    setSorting
  };
}