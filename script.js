// Dynamic content and interactivity for the portfolio

const experiences = [
	{
		role: 'Senior Software Engineer',
		company: 'Acme Web Services',
		dates: '2022 — Present',
		location: 'Remote',
		highlights: [
			'Led development of a React-based internal dashboard used by 200+ employees.',
			'Owned CI/CD pipelines with GitHub Actions, reducing deploy times by 35%.'
		]
	},
	{
		role: 'Software Engineer',
		company: 'Tech Solutions Ltd.',
		dates: '2019 — 2022',
		location: 'Kathmandu, Nepal',
		highlights: [
			'Built REST APIs with Node.js and Express.',
			'Improved test coverage and added end-to-end tests with Playwright.'
		]
	}
];

const projects = [
	{
		title: 'Project Atlas',
		description: 'A data visualization tool for business metrics with exportable reports.',
		tech: ['React', 'D3', 'Node.js'],
		link: '#'
	},
	{
		title: 'DevFlow',
		description: 'Developer tooling to scaffold projects and standardize CI templates.',
		tech: ['TypeScript', 'GitHub Actions'],
		link: '#'
	}
];

function renderExperience() {
	const container = document.getElementById('experience-list');
	container.innerHTML = '';
	experiences.forEach(exp => {
		const el = document.createElement('div');
		el.className = 'experience-item';
		el.innerHTML = `
			<div class="role">${exp.role} <span class="company">— ${exp.company}</span></div>
			<div class="dates">${exp.dates} · ${exp.location}</div>
			<ul>${exp.highlights.map(h => `<li>${h}</li>`).join('')}</ul>
		`;
		container.appendChild(el);
	});
}

function renderProjects() {
	const container = document.getElementById('project-list');
	container.innerHTML = '';
	projects.forEach(p => {
		const card = document.createElement('article');
		card.className = 'project';
		card.innerHTML = `
			<h3>${p.title}</h3>
			<p>${p.description}</p>
			<p class="muted">${p.tech.join(' · ')}</p>
			<p><a class="btn btn-outline" href="${p.link}" target="_blank" rel="noopener">View</a></p>
		`;
		container.appendChild(card);
	});
}

function setYear() {
	const y = new Date().getFullYear();
	const el = document.getElementById('year');
	if (el) el.textContent = String(y);
}

// Mobile navigation toggle
function setupNavToggle() {
	const btn = document.getElementById('nav-toggle');
	const nav = document.getElementById('primary-nav');
	btn.addEventListener('click', () => {
		const open = nav.style.display === 'block';
		nav.style.display = open ? '' : 'block';
		btn.setAttribute('aria-expanded', String(!open));
	});
	// Close nav on link click (mobile)
	nav.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
		if (window.innerWidth <= 800) nav.style.display = '';
	}));
}

// Smooth scroll for internal links
function setupSmoothScroll() {
	document.querySelectorAll('a[href^="#"]').forEach(a => {
		a.addEventListener('click', e => {
			const href = a.getAttribute('href');
			if (!href || href === '#') return;
			const target = document.querySelector(href);
			if (target) {
				e.preventDefault();
				target.scrollIntoView({behavior:'smooth',block:'start'});
			}
		});
	});
}

// Contact form (mock) validation and submit
function setupContactForm() {
	const form = document.getElementById('contact-form');
	const status = document.getElementById('form-status');
	form.addEventListener('submit', async (e) => {
		e.preventDefault();
		status.textContent = '';
		const name = document.getElementById('contact-name').value.trim();
		const email = document.getElementById('contact-email').value.trim();
		const message = document.getElementById('contact-message').value.trim();
		if (!name || !email || !message) {
			status.textContent = 'Please fill all fields.';
			return;
		}
		// Simple email check
		if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)) {
			status.textContent = 'Please provide a valid email.';
			return;
		}

		// Simulate network
		status.textContent = 'Sending…';
		try {
			await new Promise(r => setTimeout(r, 900));
			status.textContent = 'Message sent — thanks! I will reply soon.';
			form.reset();
		} catch (err) {
			status.textContent = 'Failed to send. Please try again later.';
		}
	});
}

function init() {
	renderExperience();
	renderProjects();
	setYear();
	setupNavToggle();
	setupSmoothScroll();
	setupContactForm();
}

document.addEventListener('DOMContentLoaded', init);

