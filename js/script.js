document.addEventListener('DOMContentLoaded', () => {
	const circle = document.querySelector('.progress-ring__circle');
	const radius = circle.r.baseVal.value;
	const circumference = 2 * Math.PI * radius;

	circle.style.strokeDasharray = `${circumference} ${circumference}`;
	circle.style.strokeDashoffset = circumference;

	function setProgress(value) {
		const offset = circumference - (value / 100) * circumference;
		circle.style.strokeDashoffset = offset;
	}

	const valueInput = document.getElementById('value-input');
	const animateToggle = document.getElementById('animate-toggle');
	const hideToggle = document.getElementById('hide-toggle');

	valueInput.addEventListener('input', (e) => {
		let value = e.target.value;
		if (value > 100) {
			value = 100;
			e.target.value = value;
		}
		setProgress(value);
	});

	animateToggle.addEventListener('change', (e) => {
		if (e.target.checked) {
			circle.classList.add('animate');
		} else {
			circle.classList.remove('animate');
		}
	});

	hideToggle.addEventListener('change', (e) => {
		const progressContainer = document.querySelector('.progress-container');
		if (e.target.checked) {
			progressContainer.style.display = 'none';
		} else {
			progressContainer.style.display = 'block';
		}
	});

	setProgress(valueInput.value);
});