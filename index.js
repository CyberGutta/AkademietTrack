let currentDownloadLink = '';

        function detectOS() {
            const userAgent = window.navigator.userAgent;
            const platform = window.navigator.platform;
            const macosPlatforms = ['Macintosh', 'MacIntel', 'MacPPC', 'Mac68K'];
            const windowsPlatforms = ['Win32', 'Win64', 'Windows', 'WinCE'];
            const iosPlatforms = ['iPhone', 'iPad', 'iPod'];
            
            let os = null;
            
            if (macosPlatforms.indexOf(platform) !== -1) {
                os = 'macOS';
            } else if (iosPlatforms.indexOf(platform) !== -1) {
                os = 'iOS';
            } else if (windowsPlatforms.indexOf(platform) !== -1) {
                os = 'Windows';
            } else if (/Android/.test(userAgent)) {
                os = 'Android';
            } else if (/Linux/.test(platform)) {
                os = 'Linux';
            }
            
            return os;
        }

        function getOSIcon(os) {
            const icons = {
                'Windows': '🪟',
                'macOS': '🍎',
                'Linux': '🐧',
                'iOS': '📱',
                'Android': '🤖'
            };
            return icons[os] || '💻';
        }

        function getDownloadLink(os) {
            // Using /latest/download/ to automatically get the newest release
            const links = {
                'Windows': 'https://github.com/CyberGutta/AkademiTrack/releases/latest/download/AkademiTrack-win-Setup.exe',
                'macOS': 'https://github.com/CyberGutta/AkademiTrack/releases/latest/download/AkademiTrack-osx-Setup.pkg',
                'Linux': 'https://github.com/CyberGutta/AkademiTrack/releases/latest/download/AkademiTrack.AppImage'
            };
            return links[os] || '#';
        }

        function createDownloadButton(os, isPrimary = false) {
            const icon = getOSIcon(os);
            const link = getDownloadLink(os);
            const className = isPrimary ? 'download-btn primary' : 'download-btn';
            
            return `<a href="#" class="${className}" onclick="showTermsModal('${link}')">
                <span class="os-icon">${icon}</span>
                Last ned for ${os}
            </a>`;
        }

        function showTermsModal(link) {
            currentDownloadLink = link;
            const modal = document.getElementById('termsModal');
            const checkbox = document.getElementById('termsCheckbox');
            const acceptBtn = document.getElementById('acceptTermsBtn');
            checkbox.checked = false;
            acceptBtn.disabled = true;
            modal.style.display = 'flex';
        }

        function closeModal() {
            const modal = document.getElementById('termsModal');
            modal.style.display = 'none';
            currentDownloadLink = '';
        }

        function proceedDownload() {
            if (currentDownloadLink) {
                window.location.href = currentDownloadLink;
                closeModal();
            }
        }

        function updateUI() {
            const detectedOS = detectOS();
            const primaryDownloadEl = document.getElementById('primaryDownload');
            const otherDownloadsEl = document.getElementById('otherDownloads');
            
            if (detectedOS) {
                primaryDownloadEl.innerHTML = createDownloadButton(detectedOS, true);
                const allOS = ['Windows', 'macOS', 'Linux'];
                const otherOS = allOS.filter(os => os !== detectedOS);
                otherDownloadsEl.innerHTML = otherOS.map(os => createDownloadButton(os)).join('');
            } else {
                const allOS = ['Windows', 'macOS', 'Linux'];
                primaryDownloadEl.innerHTML = '';
                otherDownloadsEl.innerHTML = allOS.map(os => createDownloadButton(os)).join('');
            }

            const checkbox = document.getElementById('termsCheckbox');
            const acceptBtn = document.getElementById('acceptTermsBtn');
            if (checkbox) {
                checkbox.addEventListener('change', () => {
                    acceptBtn.disabled = !checkbox.checked;
                });
            }
        }

        document.addEventListener('DOMContentLoaded', updateUI);

        // Sidebar navigation functionality
const sections = document.querySelectorAll('.scroll-section');
const navDots = document.querySelectorAll('.nav-dot');

const observerOptions = {
    threshold: 0.5
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const sectionId = entry.target.id;
            navDots.forEach(dot => {
                dot.classList.remove('active');
                if (dot.dataset.section === sectionId) {
                    dot.classList.add('active');
                }
            });
        }
    });
}, observerOptions);

sections.forEach(section => observer.observe(section));

// Smooth scroll on dot click
navDots.forEach(dot => {
    dot.addEventListener('click', (e) => {
        e.preventDefault();
        const sectionId = dot.dataset.section;
        document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' });
    });
});