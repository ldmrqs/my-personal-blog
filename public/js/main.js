/* =================================
   RATO'S WORLD - MAIN.JS
   Interações e Easter Eggs
   ================================= */

// Easter egg no console
console.log(`
    %c🐀 RATO'S WORLD 🐀
    %cVocê encontrou o console secreto!
    %cDigite ratoPunk() para ativar o modo chaos
    `, 'color: #8B0000; font-size: 20px; font-weight: bold;', 
       'color: #87CEEB; font-size: 14px;',
       'color: #0f0; font-size: 12px;');
    
    // Função Rato Punk
    window.ratoPunk = function() {
        document.body.style.animation = 'shake 0.5s infinite';
        alert('🎸 PUNK MODE ACTIVATED! 🎸');
        
        // Para a animação após 3 segundos
        setTimeout(() => {
            document.body.style.animation = '';
        }, 3000);
    }
    
    // Toggle modo corporativo
    function toggleCorporateMode() {
        document.body.classList.toggle('corporate-mode');
        const switchBtn = document.querySelector('.corporate-switch');
        
        if (document.body.classList.contains('corporate-mode')) {
            switchBtn.textContent = '🎸';
            switchBtn.title = 'Modo Punk';
            
            // Salva preferência no localStorage
            localStorage.setItem('mode', 'corporate');
            
            // Mensagem corporativa no console
            console.clear();
            console.log('Welcome to Corporate Mode. Professional. Clean. Efficient.');
        } else {
            switchBtn.textContent = '👔';
            switchBtn.title = 'Modo Corporativo';
            
            // Salva preferência no localStorage
            localStorage.setItem('mode', 'punk');
            
            // Volta pro console punk
            console.clear();
            console.log(`
    %c🐀 PUNK MODE RESTORED 🎸
    %cChaos is back, baby!
            `, 'color: #8B0000; font-size: 16px;', 'color: #0f0; font-size: 12px;');
        }
    }
    
    // Adiciona animação de shake via CSS dinâmico
    const style = document.createElement('style');
    style.textContent = `
        @keyframes shake {
            0%, 100% { transform: translateX(0); }
            25% { transform: translateX(-5px); }
            75% { transform: translateX(5px); }
        }
    `;
    document.head.appendChild(style);
    
    // Verifica preferência salva ao carregar
    window.addEventListener('DOMContentLoaded', () => {
        const savedMode = localStorage.getItem('mode');
        if (savedMode === 'corporate') {
            toggleCorporateMode();
        }
        
        // Alternância de mood (coca zero / chazinho)
        const moods = ['coke zero', 'tea', 'green tea', 'iced tea', 'sparkling water'];
        const moodElement = document.querySelector('.sidebar p span');
        if (moodElement) {
            // Escolhe um mood aleatório
            const randomMood = moods[Math.floor(Math.random() * moods.length)];
            moodElement.textContent = randomMood;
            
            // Muda o mood a cada 30 segundos
            setInterval(() => {
                const newMood = moods[Math.floor(Math.random() * moods.length)];
                moodElement.style.transition = 'opacity 0.3s';
                moodElement.style.opacity = '0';
                
                setTimeout(() => {
                    moodElement.textContent = newMood;
                    moodElement.style.opacity = '1';
                }, 300);
            }, 30000);
        }
        
        // Easter egg: Konami Code
        let konamiCode = [];
        const konamiSequence = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 
                               'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 
                               'b', 'a'];
        
        document.addEventListener('keydown', (e) => {
            konamiCode.push(e.key);
            konamiCode = konamiCode.slice(-10);
            
            if (konamiCode.join(',') === konamiSequence.join(',')) {
                activateSecretMode();
            }
        });
    });
    
    // Modo secreto (Konami Code)
    function activateSecretMode() {
        document.body.style.animation = 'rainbow 2s infinite';
        
        const secretStyle = document.createElement('style');
        secretStyle.textContent = `
            @keyframes rainbow {
                0% { filter: hue-rotate(0deg); }
                100% { filter: hue-rotate(360deg); }
            }
        `;
        document.head.appendChild(secretStyle);
        
        alert('🌈 SECRET RAINBOW MODE UNLOCKED! 🌈');
        
        // Para após 10 segundos
        setTimeout(() => {
            document.body.style.animation = '';
        }, 10000);
    }
    
    // Adiciona efeito de digitação ao título
    const titleElement = document.querySelector('.welcome-section h1');
    if (titleElement) {
        const originalText = titleElement.textContent;
        titleElement.textContent = '';
        let i = 0;
        
        function typeWriter() {
            if (i < originalText.length) {
                titleElement.textContent += originalText.charAt(i);
                i++;
                setTimeout(typeWriter, 50);
            }
        }
        
        // Inicia após 500ms
        setTimeout(typeWriter, 500);
    }
    
