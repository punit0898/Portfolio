var typed = new Typed('#element', {
            strings: ['Web Developer', 'Software Engineer', 'Developer', 'Web Designer'],
            typeSpeed: 50,
            backSpeed: 50,
            loop: true
        });

        document.querySelectorAll('nav ul li a').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault(); 
                const targetId = this.getAttribute('href').substring(1); 
                const targetSection = document.getElementById(targetId); 
                if (targetSection) {
                    targetSection.scrollIntoView({ behavior: 'smooth' }); 
                }
            });
        });

        function changeColor(color) {
            document.documentElement.style.setProperty('--primary-color', color);
        }

        const colorPaletteIcon = document.querySelector('.color-palette-icon');
        const colorOptions = document.querySelector('.color-options');
        colorPaletteIcon.addEventListener('click', () => {
            colorOptions.classList.toggle('show');
        });

        function toggleTheme() {
            const body = document.body;
            const themeToggleIcon = document.querySelector('.theme-toggle');
            if (body.getAttribute('data-theme') === 'light') {
                body.setAttribute('data-theme', 'dark');
                themeToggleIcon.classList.remove('fa-sun');
                themeToggleIcon.classList.add('fa-moon');
            } else {
                body.setAttribute('data-theme', 'light');
                themeToggleIcon.classList.remove('fa-moon');
                themeToggleIcon.classList.add('fa-sun');
            }
        }

        function isValidEmail(email) {
            const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            return emailPattern.test(email);
        }

        function sendEmail() {
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const message = document.getElementById('message').value;

            // Check if all fields are filled
            if (name && email && message) {
                if (!isValidEmail(email)) {
                    alert('Please enter a valid email address.');
                    return;
                }

                const subject = `Message from ${name}`;
                const body = `Name: ${name} /n Email: ${email} /n Message: ${message}`;
                const mailtoLink = `mailto:gauranggupta02@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
                window.location.href = mailtoLink;
                alert('Email sent successfully!');
                document.getElementById('contactForm').reset();
            } else {
                
                alert('Please fill out all fields before sending the message.');
            }
        }

        function toggleMenu() {
            const navLinks = document.querySelector('.nav-links');
            navLinks.classList.toggle('active');
        }

        const navToggle = document.createElement('div');
        navToggle.classList.add('nav-toggle');
        navToggle.innerHTML = '<i class="fas fa-bars"></i>';
        document.querySelector('nav').appendChild(navToggle);

        navToggle.addEventListener('click', () => {
            const navLinks = document.querySelector('.right ul');
            navLinks.classList.toggle('active');
        });
