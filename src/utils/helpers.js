export function groupTickets(tickets, grouping) {
  if (!tickets.length) return {};

  switch (grouping) {
    case 'status':
      return tickets.reduce((acc, ticket) => {
        const status = ticket.status;
        if (!acc[status]) acc[status] = [];
        acc[status].push(ticket);
        return acc;
      }, {});

    case 'user':
      return tickets.reduce((acc, ticket) => {
        const userId = ticket.userId;
        if (!acc[userId]) acc[userId] = [];
        acc[userId].push(ticket);
        return acc;
      }, {});

    case 'priority':
      const priorityMap = {
        4: 'Urgent',
        3: 'High',
        2: 'Medium',
        1: 'Low',
        0: 'No priority'
      };
      return tickets.reduce((acc, ticket) => {
        const priority = priorityMap[ticket.priority];
        if (!acc[priority]) acc[priority] = [];
        acc[priority].push(ticket);
        return acc;
      }, {});

    default:
      return { 'All Tickets': tickets };
  }
}

export function sortTickets(groupedTickets, sorting) {
  const sortedGroups = {};
  
  Object.keys(groupedTickets).forEach(group => {
    sortedGroups[group] = [...groupedTickets[group]].sort((a, b) => {
      if (sorting === 'priority') {
        return b.priority - a.priority;
      } else {
        return a.title.localeCompare(b.title);
      }
    });
  });

  return sortedGroups;
}