import { useState } from 'react'

const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']
const initialTask = { title: '', duration: '', deadline: '', category: '', priority: 'Medium', preferredTime: 'No Preference', preferredDays: [], subtasks: '' }

function AddTaskForm({ onCancel, onSubmitted }) {
	const [task, setTask] = useState(initialTask)
	const updateTask = (field, value) => setTask((currentTask) => ({ ...currentTask, [field]: value }))
	const toggleDay = (day) => updateTask('preferredDays', task.preferredDays.includes(day) ? task.preferredDays.filter((selectedDay) => selectedDay !== day) : [...task.preferredDays, day])
	const handleSubmit = (event) => { event.preventDefault(); onSubmitted?.(task) }

	return (
		<form className="form-section" onSubmit={handleSubmit}>
			<div className="section-heading"><p className="eyebrow">Create</p><h2>Add a task</h2></div>
			<label>Title<input value={task.title} onChange={(event) => updateTask('title', event.target.value)} /></label>
			<div className="form-row"><label>Duration (minutes)<input type="number" min="0" value={task.duration} onChange={(event) => updateTask('duration', event.target.value)} /></label><label>Deadline<input type="date" value={task.deadline} onChange={(event) => updateTask('deadline', event.target.value)} /></label></div>
			<label>Category<input value={task.category} onChange={(event) => updateTask('category', event.target.value)} /></label>
			<fieldset><legend>Priority</legend><div className="choice-row">{['Low', 'Medium', 'High'].map((priority) => <label className="choice" key={priority}><input type="radio" name="priority" checked={task.priority === priority} onChange={() => updateTask('priority', priority)} />{priority}</label>)}</div></fieldset>
			<label>Preferred time<select value={task.preferredTime} onChange={(event) => updateTask('preferredTime', event.target.value)}>{['Morning', 'Afternoon', 'Evening', 'No Preference'].map((time) => <option key={time}>{time}</option>)}</select></label>
			<fieldset><legend>Preferred days</legend><div className="days-grid">{days.map((day) => <label className="choice" key={day}><input type="checkbox" checked={task.preferredDays.includes(day)} onChange={() => toggleDay(day)} />{day.slice(0, 3)}</label>)}</div></fieldset>
			<label>Subtasks<textarea rows="3" value={task.subtasks} onChange={(event) => updateTask('subtasks', event.target.value)} /></label>
			<div className="form-actions"><button className="cancel-button" type="button" onClick={onCancel}>Cancel</button><button className="secondary-button" type="submit">Keep task draft</button></div>
		</form>
	)
}

export default AddTaskForm
