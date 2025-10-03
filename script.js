// Dynamic content and interactivity for the portfolio

// Resume file available at repository root
const resumeFile = 'Ranjan_Shrestha_DevOps_Resume.pdf';

const experiences = [
	{
		role: 'DevOps Engineer',
		company: 'Identv Nepal Pvt. Ltd.',
		dates: '2021 — 2025',
		location: 'Remote',
		highlights: [
			'Designed and implemented CI/CD pipelines using GitHub Actions and Docker for multiple clients.',
			'Automated infrastructure provisioning using Terraform and improved deployment reliability.'
		]
	},
	{
		role: 'Network and Security Engineer',
		company: 'CloudTech Solutions Ltd.',
		dates: '2019 — 2021',
		location: 'Kathmandu, Nepal',
		highlights: [
			'Automated repetitive network tasks with Bash and Ansible, saving engineering time.',
			'Built and maintained secure network environments including VPN, VLAN, and firewall setups.',
            'Supported cloud migration projects and created baseline configurations aligned with security standards.'
		]
	}
];

const projects = [
	{
		title: 'Terraform EKS Provisioner',
		description: 'A complete solution to provision and manage EKS clusters using Terraform, including networking, IAM roles, and node groups.',
		tech: ['Terraform', 'AWS EKS', 'Bash', 'Helm'],
		image: 'assets/terraform1.jpg',
		link: 'https://github.com/ranjan0369/eks-provisioner-terraform',
		featured: true
	},
	{
		title: 'Facial Expression Recognition System',
		description: 'Beginner level project using Fisherfaces algorithm to recognize human facial expressions from images.',
		tech: ['Python', 'OpenCV', 'NumPy', 'scikit-learn'],
		image: 'assets/fers.jpg',
		link: 'https://github.com/ranjan0369/facial-expression-recognition-system'
	},
    {
        title: 'k3s provisioner using Ansible',
        description: 'Ansible playbook to automate the deployment of a lightweight Kubernetes cluster using k3s on multiple nodes.',
        tech: ['Ansible', 'k3s', 'Bash'],
        image: 'assets/k3s.jpg',
        link: '#'
    },
    {
        title: 'Sentiment Analysis',
        description: 'Beginner level project using Logistic Regression and TFIDF to classify text sentiment as positive or negative.',
        tech: ['Python', 'scikit-learn', 'Pandas'],
        image: 'assets/sentiment.jpg',
        link: 'https://github.com/ranjan0369/sentiment-analysis'
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
		// optional image
		if (p.image) {
			const img = document.createElement('img');
			img.className = 'project-image';
			img.src = p.image;
			img.alt = p.title + ' screenshot';
			card.appendChild(img);
		}
		const body = document.createElement('div');
		body.className = 'project-body';
		body.innerHTML = `
			<h3>${p.title}</h3>
			<p>${p.description}</p>
		`;
		// tech badges
		const techList = document.createElement('div');
		techList.className = 'tech-list';
		p.tech.forEach(t => {
			const b = document.createElement('span');
			b.className = 'tech-badge';
			b.textContent = t;
			techList.appendChild(b);
		});
		body.appendChild(techList);
		card.appendChild(body);
		const footer = document.createElement('div');
		footer.className = 'project-footer';
		const left = document.createElement('div');
		left.className = 'meta';
		left.textContent = '';
		const actions = document.createElement('div');
		actions.className = 'actions';
		const view = document.createElement('a');
		view.className = 'btn btn-outline';
		view.href = p.link || '#';
		view.target = '_blank';
		view.rel = 'noopener';
		view.textContent = 'View';
		actions.appendChild(view);
		footer.appendChild(left);
		footer.appendChild(actions);
		card.appendChild(footer);
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

