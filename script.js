const circles = document.querySelectorAll('.circle');
        const prev = document.getElementById('prev');
        const next = document.getElementById('next');
        let currentIndex = 0;

        function updateProgress() {
            circles.forEach((circle, index) => {
                circle.classList.remove('active');

                if (index <= currentIndex) {
                    circle.classList.add('active');
                }
            });

            prev.disabled = currentIndex === 0; // Disable Prev if at first circle
            next.disabled = currentIndex === circles.length - 1; // Disable Next if at last circle
        }

        next.addEventListener('click', () => {
            if (currentIndex < circles.length - 1) {
                currentIndex++;
                updateProgress();
            }
        });

        prev.addEventListener('click', () => {
            if (currentIndex > 0) {
                currentIndex--;
                updateProgress();
            }
        });

        updateProgress(); // Initialize the state