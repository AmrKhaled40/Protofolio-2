 // --- إدارة مؤشر الماوس ---
        const cursor = document.getElementById('cursor');
        const cursorBlur = document.getElementById('cursor-blur');
        
        document.addEventListener('mousemove', (e) => {
            cursor.style.left = e.clientX + 'px';
            cursor.style.top = e.clientY + 'px';
            cursorBlur.style.left = e.clientX + 'px';
            cursorBlur.style.top = e.clientY + 'px';
        });

        // --- إدارة شريط التنقل الجديد (Floating Logic) ---
        const nav = document.getElementById('main-nav');
        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) {
                nav.classList.add('scrolled');
            } else {
                nav.classList.remove('scrolled');
            }
        });

        // --- Scroll Spy ---
        const sections = document.querySelectorAll('section');
        const navLinks = document.querySelectorAll('.nav-link');

        window.addEventListener('scroll', () => {
            let current = '';
            sections.forEach(section => {
                const sectionTop = section.offsetTop;
                const sectionHeight = section.clientHeight;
                if (pageYOffset >= (sectionTop - 250)) {
                    current = section.getAttribute('id');
                }
            });

            navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.dataset.section === current) {
                    link.classList.add('active');
                }
            });
        });

        // --- تفعيل حركات الظهور عند التمرير ---
        const observerOptions = { threshold: 0.1 };
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('active');
                }
            });
        }, observerOptions);

        document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));

        // --- منطق تفاعل المهارات مع الماوس ---
        document.querySelectorAll('.skill-icon-card').forEach(card => {
            card.addEventListener('mouseenter', () => {
                const hoverColor = card.style.getPropertyValue('--hover-clr');
                cursor.style.transform = 'scale(2.5)';
                cursor.style.backgroundColor = hoverColor;
                cursor.style.opacity = '0.6';
            });
            card.addEventListener('mouseleave', () => {
                cursor.style.transform = 'scale(1)';
                cursor.style.backgroundColor = 'var(--primary)';
                cursor.style.opacity = '1';
            });
        });

        // تفاعل مخصص لأيقونات التواصل الاجتماعي
        document.querySelectorAll('.social-icon-wrapper').forEach(icon => {
            icon.addEventListener('mouseenter', () => {
                cursor.style.transform = 'scale(3)';
                cursor.style.mixBlendMode = 'normal';
            });
            icon.addEventListener('mouseleave', () => {
                cursor.style.transform = 'scale(1)';
                cursor.style.mixBlendMode = 'difference';
            });
        });

        // رد فعل عند إرسال النموذج
        document.getElementById('contact-form').addEventListener('submit', function(e) {
            e.preventDefault();
            const btn = this.querySelector('button');
            const originalText = btn.innerText;
            btn.innerText = "Message Sent! ✓";
            btn.style.background = "#10b981";
            
            setTimeout(() => {
                btn.innerText = originalText;
                btn.style.background = "";
                this.reset();
            }, 3000);
        });