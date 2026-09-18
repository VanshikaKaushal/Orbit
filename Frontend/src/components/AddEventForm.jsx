import { useState } from 'react'

const initialEvent = { title: '', start: '', end: '', location: '', category: '', description: '', recurring: false, pattern: 'Weekly' }

function AddEventForm({ onCancel, onSubmitted }) {
	const [event, setEvent] = useState(initialEvent)
	const updateEvent = (field, value) => setEvent((currentEvent) => ({ ...currentEvent, [field]: value }))
	const handleSubmit = (formEvent) => { formEvent.preventDefault(); onSubmitted?.(event) }

	return (
		<form className="form-section" onSubmit={handleSubmit}>
			<div className="section-heading"><p className="eyebrow">Schedule</p><h2>Add an event</h2></div>
			<label>Title<input value={event.title} onChange={(formEvent) => updateEvent('title', formEvent.target.value)} /></label>
			<div className="form-row"><label>Start time<input type="datetime-local" value={event.start} onChange={(formEvent) => updateEvent('start', formEvent.target.value)} /></label><label>End time<input type="datetime-local" value={event.end} onChange={(formEvent) => updateEvent('end', formEvent.target.value)} /></label></div>
			<label>Location<input value={event.location} onChange={(formEvent) => updateEvent('location', formEvent.target.value)} /></label>
			<label>Category<input value={event.category} onChange={(formEvent) => updateEvent('category', formEvent.target.value)} /></label>
			<label>Description<textarea rows="3" value={event.description} onChange={(formEvent) => updateEvent('description', formEvent.target.value)} /></label>
			<label className="choice"><input type="checkbox" checked={event.recurring} onChange={(formEvent) => updateEvent('recurring', formEvent.target.checked)} />Recurring event</label>
			{event.recurring && <label>Recurrence pattern<select value={event.pattern} onChange={(formEvent) => updateEvent('pattern', formEvent.target.value)}>{['Daily', 'Weekly', 'Monthly'].map((pattern) => <option key={pattern}>{pattern}</option>)}</select></label>}
			<div className="form-actions"><button className="cancel-button" type="button" onClick={onCancel}>Cancel</button><button className="secondary-button" type="submit">Keep event draft</button></div>
		</form>
	)
}

export default AddEventForm
