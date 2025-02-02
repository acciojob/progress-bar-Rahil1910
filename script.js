//your JS code here. If required.
const circles = document.querySelectorAll('.circle');
        const prev = document.getElementById('previous');
        const next = document.getElementById('next');
        let currentIndex = 0;
        function updateProgress(){
            circles.forEach((circle,index)=>{
                circle.classList.remove('active');

                if(index <= currentIndex){
                    circle.classList.add('active');
                }
            });
            prev.disabled = currentIndex === 0;
            next.disabled = currentIndex === circles.length - 1;
        }

        next.addEventListener('click',()=>{
            if(currentIndex < circles.length -1){
                currentIndex++;
            }
            updateProgress();
        });
        prev.addEventListener('click',()=>{
            if(currentIndex >0){
                currentIndex--;
            }
            updateProgress();
        })
        updateProgress();