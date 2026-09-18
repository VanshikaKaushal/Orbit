const hours = ['8 AM', '9 AM', '10 AM', '11 AM', '12 PM', '1 PM', '2 PM', '3 PM', '4 PM']
const weekdays = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri']

function CalendarView({ events = [] }) {
	return <section className="calendar-view" aria-label="Calendar placeholder"><div className="calendar-heading"><div><p className="eyebrow">This week</p><h2>Calendar</h2></div><span className="calendar-date">September 14 - 20</span></div><div className="calendar-grid"><div className="calendar-corner" />{weekdays.map((day) => <div className="calendar-day" key={day}>{day}</div>)}{hours.map((hour) => <div className="calendar-row" key={hour}><span className="calendar-hour">{hour}</span>{weekdays.map((day) => <div className="calendar-cell" key={`${day}-${hour}`} />)}</div>)}</div>{events.length > 0 && <div className="calendar-events"><p className="eyebrow">Submitted events</p>{events.map((event) => <article className="calendar-event" key={event.id}><strong>{event.title || 'Untitled event'}</strong><span>{event.start ? event.start.replace('T', ' ') : 'No start time'}{event.location ? ` · ${event.location}` : ''}</span></article>)}</div>}<div className="calendar-legend"><span><i className="legend-dot event-dot" />Events</span><span><i className="legend-dot task-dot" />Tasks</span><span><i className="legend-dot suggested-dot" />Suggestions</span></div></section>
}

export default CalendarView
