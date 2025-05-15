document.querySelector('button.md\\:hidden').addEventListener('click', function() {
            const nav = document.querySelector('nav.hidden');
            if (nav.classList.contains('hidden')) {
                nav.classList.remove('hidden');
                nav.classList.add('block', 'absolute', 'top-16', 'left-0', 'w-full', 'bg-white', 'p-4', 'shadow-md');
            } else {
                nav.classList.add('hidden');
                nav.classList.remove('block', 'absolute', 'top-16', 'left-0', 'w-full', 'bg-white', 'p-4', 'shadow-md');
            }
        });

        // Smooth scrolling for anchor links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                
                document.querySelector(this.getAttribute('href')).scrollIntoView({
                    behavior: 'smooth'
                });
            });
        });