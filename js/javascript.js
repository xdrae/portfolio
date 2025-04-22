window.addEventListener('load',(currentyear)=>{
    date = new Date();
    document.querySelector("#currentyear").textContent = date.getFullYear();
});
//Alternar modo oscuro/nocturno
document.querySelector('.sonar-effect').addEventListener('click', function() {
    document.body.classList.toggle('night-vision');
    // (Necesitarías definir la clase .night-vision en tu CSS)
});


//Rueda de habilidades


const weaponWheel = document.getElementById('weaponWheel');
const weaponOptions = document.querySelectorAll('.weapon-option');
const centerInfo = document.getElementById('centerInfo');
const weaponTitle = document.getElementById('weaponTitle');
const weaponDesc = document.getElementById('weaponDesc');
const weaponStars = document.getElementById('weaponStars');

// Posicionar las opciones en un círculo
function positionWeaponsInCircle() {
    const radius = 150;
    const centerX = 225;
    const centerY = 225;
    const options = weaponOptions.length;
    
    weaponOptions.forEach((option, index) => {
        const angle = (index * (2 * Math.PI / options)) - Math.PI / 2;
        const x = centerX + radius * Math.cos(angle);
        const y = centerY + radius * Math.sin(angle);
        
        option.style.left = `${x}px`;
        option.style.top = `${y}px`;
        
        // Asegurar que la transformación inicial sea correcta
        option.style.transform = 'translate(-50%, -50%)';
    });
}

// Datos de las armas (igual que antes)
const weaponsData = {
    batarang: {
        name: "Batarang",
        description: "Arma básica de Batman. Lanzable y recuperable. Efectivo contra enemigos no armados.",
        stars: 3
    },
    explosive: {
        name: "Gel Explosivo",
        description: "Gel químico explosivo. Puede ser detonado remotamente. Ideal para derribar paredes débiles.",
        stars: 4
    },
    grapple: {
        name: "Gancho de Garra",
        description: "Dispositivo de agarre que permite escalar o mover objetos pesados. Esencial para movilidad.",
        stars: 5
    },
    hacker: {
        name: "Herramienta Hacker",
        description: "Sistema de hacking portátil. Permite desactivar dispositivos electrónicos enemigos.",
        stars: 3
    },
    smoke: {
        name: "Bomba de Humo",
        description: "Genera una nube de humo denso para cubrir movimientos o desorientar enemigos.",
        stars: 2
    },
    freeze: {
        name: "Granada Congelante",
        description: "Congela instantáneamente el agua y enemigos. Útil para crear plataformas o inmovilizar objetivos.",
        stars: 4
    },
    remote: {
        name: "Batarang Remoto",
        description: "Batarang controlado a distancia. Puede golpear múltiples objetivos en secuencia.",
        stars: 4
    },
    disruptor: {
        name: "Disruptor",
        description: "Desactiva armas enemigas a distancia. Perfecto para enfrentamientos contra múltiples oponentes armados.",
        stars: 5
    }
};

// Mostrar/ocultar rueda de armas
document.addEventListener('keydown', (e) => {
    if (e.key === 'Tab') {
        e.preventDefault();
        const isOpening = !weaponWheel.classList.contains('active');
        weaponWheel.classList.toggle('active');
        
        if (!isOpening) {
            centerInfo.classList.remove('active');
            weaponOptions.forEach(opt => {
                opt.classList.remove('selected');
                opt.style.transform = 'translate(-50%, -50%)';
            });
        }
    }
});

// Selección de arma
weaponOptions.forEach(option => {
    option.addEventListener('click', () => {
        weaponOptions.forEach(opt => {
            opt.classList.remove('selected');
            opt.style.transform = 'translate(-50%, -50%)';
        });
        
        option.classList.add('selected');
        option.style.transform = 'translate(-50%, -50%) scale(1.2)';
        
        const weaponType = option.getAttribute('data-weapon');
        const weapon = weaponsData[weaponType];
        
        weaponTitle.textContent = weapon.name;
        weaponDesc.textContent = weapon.description;
        
        weaponStars.innerHTML = '';
        for (let i = 0; i < 5; i++) {
            const star = document.createElement('span');
            star.className = 'classification-star';
            star.textContent = i < weapon.stars ? '★' : '☆';
            weaponStars.appendChild(star);
        }
        
        centerInfo.classList.add('active');
    });

    option.addEventListener('mouseenter', () => {
        if (!option.classList.contains('selected')) {
            option.style.transform = 'translate(-50%, -50%) scale(1.1)';
        }
    });

    option.addEventListener('mouseleave', () => {
        if (!option.classList.contains('selected')) {
            option.style.transform = 'translate(-50%, -50%)';
        }
    });
});

// Posicionar armas al cargar
document.addEventListener('DOMContentLoaded', positionWeaponsInCircle);