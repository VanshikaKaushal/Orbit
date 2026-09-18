import MoodSelector from '../components/MoodSelector'

function CheckInPage({ mood, energy, onMoodChange, onEnergyChange, onContinue }) {
	return (
		<main className="check-in-page page-shell">
			<div className="check-in-content">
				<p className="eyebrow">Your daily orbit</p>
				<h1>Welcome to Orbit</h1>
				<p className="page-intro">A small check-in to help shape your day around how you feel right now.</p>
				<MoodSelector mood={mood} energy={energy} onMoodChange={onMoodChange} onEnergyChange={onEnergyChange} />
				<button className="primary-button continue-button" type="button" onClick={onContinue}>Continue to dashboard</button>
			</div>
		</main>
	)
}

export default CheckInPage
