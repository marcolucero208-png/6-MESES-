 <script>
        // Crear pétalos flotantes
        function createPetal() {
            const petals = ['🌸', '🌺', '🌼', '💮', '🏵️'];
            const petal = document.createElement('div');
            petal.className = 'petal';
            petal.innerHTML = petals[Math.floor(Math.random() * petals.length)];
            petal.style.left = Math.random() * 100 + 'vw';
            petal.style.animationDuration = (Math.random() * 4 + 6) + 's';
            petal.style.animationDelay = Math.random() * 2 + 's';
            petal.style.fontSize = (Math.random() * 10 + 15) + 'px';
            
            document.getElementById('petals').appendChild(petal);
            
            setTimeout(() => {
                petal.remove();
            }, 10000);
        }
        
        setInterval(createPetal, 1500);
        
        // Efectos de clic
        document.addEventListener('click', (e) => {
            for(let i = 0; i < 5; i++) {
                setTimeout(() => {
                    const butterfly = document.createElement('div');
                    butterfly.innerHTML = '🦋';
                    butterfly.style.position = 'fixed';
                    butterfly.style.left = e.clientX + 'px';
                    butterfly.style.top = e.clientY + 'px';
                    butterfly.style.fontSize = '25px';
                    butterfly.style.pointerEvents = 'none';
                    butterfly.style.zIndex = '1000';
                    butterfly.style.filter = 'drop-shadow(0 0 10px #ff69b4)';
                    butterfly.style.transition = 'all 2s ease-out';
                    
                    document.body.appendChild(butterfly);
                    
                    setTimeout(() => {
                        const randomX = (Math.random() - 0.5) * 200;
                        const randomY = Math.random() * -150 - 50;
                        butterfly.style.transform = `translate(${randomX}px, ${randomY}px) rotate(360deg)`;
                        butterfly.style.opacity = '0';
                    }, 10);
                    
                    setTimeout(() => butterfly.remove(), 2000);
                }, i * 150);
            }
        });
        
        // Mensaje sorpresa
        setTimeout(() => {
            const surprise = document.createElement('div');
            surprise.innerHTML = '🦋 Cada día contigo es una nueva aventura llena de amor 🦋';
            surprise.style.position = 'fixed';
            surprise.style.bottom = '80px';
            surprise.style.left = '50%';
            surprise.style.transform = 'translateX(-50%)';
            surprise.style.color = '#ff1493';
            surprise.style.fontSize = '18px';
            surprise.style.fontWeight = 'bold';
            surprise.style.textShadow = '0 0 10px #ff69b4';
            surprise.style.opacity = '0';
            surprise.style.transition = 'all 2s ease';
            surprise.style.zIndex = '1000';
            surprise.style.background = 'rgba(255, 255, 255, 0.95)';
            surprise.style.padding = '15px 30px';
            surprise.style.borderRadius = '25px';
            surprise.style.border = '2px solid #ff69b4';
            surprise.style.backdropFilter = 'blur(10px)';
            
            document.body.appendChild(surprise);
            
            setTimeout(() => {
                surprise.style.opacity = '1';
                surprise.style.transform = 'translateX(-50%) translateY(-10px)';
            }, 100);
            
            setTimeout(() => {
                surprise.style.opacity = '0';
                setTimeout(() => surprise.remove(), 2000);
            }, 8000);
        }, 10000);
        
        // Crear más mariposas dinámicamente
        function createRandomButterfly() {
            const butterfly = document.createElement('div');
            butterfly.innerHTML = '🦋';
            butterfly.style.position = 'fixed';
            butterfly.style.fontSize = (Math.random() * 20 + 25) + 'px';
            butterfly.style.color = ['#ff69b4', '#ff1493', '#da70d6', '#ba55d3'][Math.floor(Math.random() * 4)];
            butterfly.style.top = Math.random() * 100 + 'vh';
            butterfly.style.filter = 'drop-shadow(0 0 8px rgba(255, 105, 180, 0.6))';
            butterfly.style.animation = `fly ${Math.random() * 8 + 10}s infinite linear`;
            butterfly.style.animationDelay = Math.random() * 5 + 's';
            butterfly.style.zIndex = '5';
            butterfly.style.pointerEvents = 'none';
            
            document.body.appendChild(butterfly);
            
            setTimeout(() => {
                butterfly.remove();
            }, 20000);
        }
        
        setInterval(createRandomButterfly, 3000);
    </script>
</body>
</html>