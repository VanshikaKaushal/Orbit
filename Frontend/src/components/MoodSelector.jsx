const moods = ['Very Low', 'Low', 'Neutral', 'Good', 'Great']
const energies = ['Very Tired', 'Tired', 'Okay', 'Energized', 'Very Energized']

function OptionGroup({ label, options, value, onChange }) {
	return (
		<fieldset className="option-group">
			<legend>{label}</legend>
			<div className="option-list">{options.map((option) => <button className={`option-button ${value === option ? 'selected' : ''}`} key={option} type="button" aria-pressed={value === option} onClick={() => onChange(option)}>{option}</button>)}</div>
		</fieldset>
	)
}

function MoodSelector({ mood, energy, onMoodChange, onEnergyChange, compact = false }) {
	if (compact) {
		return (
			<section className="mood-selector compact" aria-label="Update mood and energy">
				<label className="compact-control">Mood<select value={mood} onChange={(event) => onMoodChange(event.target.value)}><option value="">Select mood</option>{moods.map((option) => <option key={option}>{option}</option>)}</select></label>
				<label className="compact-control">Energy<select value={energy} onChange={(event) => onEnergyChange(event.target.value)}><option value="">Select energy</option>{energies.map((option) => <option key={option}>{option}</option>)}</select></label>
			</section>
		)
	}

	return <section className={`mood-selector ${compact ? 'compact' : ''}`}><OptionGroup label="How is your mood?" options={moods} value={mood} onChange={onMoodChange} /><OptionGroup label="How is your energy?" options={energies} value={energy} onChange={onEnergyChange} /></section>
}

export default MoodSelector
