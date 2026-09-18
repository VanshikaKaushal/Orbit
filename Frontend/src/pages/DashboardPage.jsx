import { useState } from 'react'
import AddEventForm from '../components/AddEventForm'
import AddTaskForm from '../components/AddTaskForm'
import CalendarView from '../components/CalendarView'
import MoodSelector from '../components/MoodSelector'
import RecommendedTask from '../components/RecommendedTask'

function DashboardPage({ mood, energy, onMoodChange, onEnergyChange }) {
    const [activeModal, setActiveModal] = useState(null)
	const [tasks, setTasks] = useState([])
	const [events, setEvents] = useState([])

	function closeModal() {
		setActiveModal(null)
	}

	function handleTaskSubmit(task) {
		setTasks((currentTasks) => [...currentTasks, { ...task, id: crypto.randomUUID(), status: 'unscheduled' }])
		closeModal()
	}

	function handleEventSubmit(event) {
		setEvents((currentEvents) => [...currentEvents, { ...event, id: crypto.randomUUID() }])
		closeModal()
	}

	function updateTaskStatus(taskId, status) {
		setTasks((currentTasks) => currentTasks.map((task) => task.id === taskId ? { ...task, status } : task))
	}

	const recommendedTask = tasks.find((task) => task.status !== 'completed')

	return (
		<main className="dashboard-page page-shell">
			<header className="dashboard-header">
				<div className="dashboard-brand"><p className="eyebrow">Orbit</p><h1>Dashboard</h1></div>
				<MoodSelector compact mood={mood} energy={energy} onMoodChange={onMoodChange} onEnergyChange={onEnergyChange} />
			</header>
			<div className="dashboard-layout">
				<aside className="dashboard-sidebar">
					<div className="sidebar-actions">
						<button className="action-button" type="button" onClick={() => setActiveModal('task')}>+ Add Task</button>
						<button className="action-button" type="button" onClick={() => setActiveModal('event')}>+ Add Event</button>
					</div>
					<RecommendedTask task={recommendedTask} onConfirm={(taskId) => updateTaskStatus(taskId, 'confirmed')} onComplete={(taskId) => updateTaskStatus(taskId, 'completed')} />
				</aside>
				<CalendarView events={events} />
			</div>
			{activeModal && (
				<div className="modal-overlay" role="presentation" onMouseDown={closeModal}>
					<section className="modal-dialog" role="dialog" aria-modal="true" aria-labelledby="modal-title" onMouseDown={(event) => event.stopPropagation()}>
						<div className="modal-header"><h2 id="modal-title">{activeModal === 'task' ? 'Add a task' : 'Add an event'}</h2><button className="close-button" type="button" aria-label="Close dialog" onClick={closeModal}>×</button></div>
						{activeModal === 'task' ? <AddTaskForm onCancel={closeModal} onSubmitted={handleTaskSubmit} /> : <AddEventForm onCancel={closeModal} onSubmitted={handleEventSubmit} />}
					</section>
				</div>
			)}
		</main>
	)
}

export default DashboardPage
