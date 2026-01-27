// Dynamic content and interactivity for the portfolio

// Resume file available at repository root
const resumeFile = 'Ranjan_Shrestha_DevOps_Resume.pdf';

const experiences = [
	{
		role: 'DevOps Engineer Intern',
		company: 'Springer Capital Investments LLC',
		dates: '2025 — Present',
		location: 'Remote',
		highlights: [
			'Designed a production grade multi-az Patroni Cluster and provisioned the infrastructure using Terraform and Ansible',
			'Implemented security checks in CICD pipeline such as secret scanning, SAST, Dependency Scanning, Container Image scanning using tools such as Gitleaks, Semgrep, Trivy, Syf and Grype.',
			'Provisioned production ready Nomad cluster using Ansible for running container workflows.'
		]
	},
	{
		role: 'DevOps Engineer',
		company: 'Identv Nepal Pvt. Ltd.',
		dates: '2021 — 2025',
		location: 'Remote',
		highlights: [
			'Built and optimized CI/CD pipelines using CircleCI and GitHub Actions, improving deployment frequency and reliability.',
			'Automated infrastructure provisioning using Terraform and Ansible, reducing manual operations.',
			'Implemented robust monitoring and alerting with Prometheus and Grafana, achieving 99.9% system uptime.',
			'Worked cross-functionally with developers to resolve build and deployment issues, reducing incident resolution time.',
			'Created comprehensive documentation for deployment workflows and troubleshooting procedures.'
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
		image: 'assets/projects/terraform1.jpg',
		link: 'https://github.com/ranjan0369/eks-provisioner-terraform',
		featured: true
	},
	{
		title: 'Facial Expression Recognition System',
		description: 'Beginner level project using Fisherfaces algorithm to recognize human facial expressions from images.',
		tech: ['Python', 'OpenCV', 'NumPy', 'scikit-learn'],
		image: 'assets/projects/fers.jpg',
		link: 'https://github.com/ranjan0369/facial-expression-recognition-system'
	},
    {
        title: 'Nomad Cluster Provisioning using Ansible',
        description: 'Ansible playbook to automate the deployment of a nomad cluster.',
        tech: ['Ansible', 'Nomad', 'Bash'],
        image: 'assets/projects/nomad.jpg',
        link: 'https://github.com/ranjan0369/nomad-cluster-provisioner'
    },
    {
        title: 'Sentiment Analysis',
        description: 'Beginner level project using Logistic Regression and TFIDF to classify text sentiment as positive or negative.',
        tech: ['Python', 'scikit-learn', 'Pandas'],
        image: 'assets/projects/sentiment.jpg',
        link: 'https://github.com/ranjan0369/sentiment-analysis'
    },
	{
        title: 'Multi-AZ Patroni Cluster with Terraform and Ansible',
        description: 'Beginner level project using Logistic Regression and TFIDF to classify text sentiment as positive or negative.',
        tech: ['Ansible', 'Terraform', 'PostgreSQL', 'Patroni'],
        image: 'assets/projects/patroni.jpg',
        link: ' https://github.com/ranjan0369/multi-az-patroni-cluster'
    }
];

function renderExperience() {
	const container = document.getElementById('experience-list');
	container.innerHTML = '';
	experiences.forEach(exp => {
		const el = document.createElement('div');
		el.className = 'experience-item';
		el.innerHTML = `
			<div class="role">${exp.role} | ${exp.company}</div>
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
		const open = nav.classList.toggle('open');
		btn.setAttribute('aria-expanded', String(open));
		// if opening, focus the first link for accessibility
		if (open) {
			const first = nav.querySelector('a');
			if (first) first.focus();
		}
	});
	// Close nav on link click (mobile)
	nav.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
		if (window.innerWidth <= 800) nav.classList.remove('open');
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
	setupCertCarousel();
}

document.addEventListener('DOMContentLoaded', init);

// Certifications carousel implementation
function setupCertCarousel() {
	const carousel = document.querySelector('.cert-carousel');
	if (!carousel) return;
	const track = carousel.querySelector('.cert-track');
	const slides = Array.from(carousel.querySelectorAll('.cert-slide'));
	const prevBtn = carousel.querySelector('.cert-prev');
	const nextBtn = carousel.querySelector('.cert-next');
	const indicatorsWrap = carousel.querySelector('.cert-indicators');
	if (!track || slides.length === 0) return;
	if (!prevBtn || !nextBtn || !indicatorsWrap) {
		console.warn('Cert carousel missing controls or indicators DOM elements');
	}
	let index = 0;
	let autoplayId = null;

	// build indicators
		slides.forEach((s, i) => {
			const btn = document.createElement('button');
			btn.type = 'button';
			btn.setAttribute('aria-label', `Show certificate ${i+1}`);
			if (i === 0) btn.classList.add('active');
			btn.addEventListener('click', () => goTo(i));
			if (indicatorsWrap) indicatorsWrap.appendChild(btn);
		});

	const indicators = Array.from(indicatorsWrap.children);

	function update() {
		track.style.transform = `translateX(-${index * 100}%)`;
		indicators.forEach((b, i) => b.classList.toggle('active', i === index));
	}

	function prev() { index = (index - 1 + slides.length) % slides.length; update(); }
	function next() { index = (index + 1) % slides.length; update(); }
	function goTo(i) { index = i % slides.length; update(); restartAutoplay(); }

		if (prevBtn) prevBtn.addEventListener('click', () => { prev(); restartAutoplay(); });
		if (nextBtn) nextBtn.addEventListener('click', () => { next(); restartAutoplay(); });

	// keyboard support
	carousel.addEventListener('keydown', (e) => {
		if (e.key === 'ArrowLeft') prev();
		if (e.key === 'ArrowRight') next();
	});

		// autoplay (guarded to avoid multiple intervals stacking)
		function startAutoplay() {
			if (autoplayId) return; // already running
			autoplayId = setInterval(() => { next(); }, 4500);
		}
		function stopAutoplay() {
			if (autoplayId) {
				clearInterval(autoplayId);
				autoplayId = null;
			}
		}
		function restartAutoplay() { stopAutoplay(); startAutoplay(); }

	carousel.addEventListener('mouseenter', stopAutoplay);
	carousel.addEventListener('focusin', stopAutoplay);
	carousel.addEventListener('mouseleave', startAutoplay);
	carousel.addEventListener('focusout', startAutoplay);

	// make carousel focusable for keyboard navigation
	carousel.tabIndex = 0;

	update();
	startAutoplay();
}
