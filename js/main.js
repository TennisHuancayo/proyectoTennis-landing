tailwind.config = {
    theme: {
        extend: {
            colors: {
                primary: '#1E7F43',
                secondary: '#0F172A',
                accent: '#F4C430',
            },
            fontFamily: {
                display: ['Montserrat', 'sans-serif'],
                body: ['Montserrat', 'sans-serif'],
            },
        }
    }
}

// Sticky Header on Scroll
window.addEventListener('scroll', () => {
    const header = document.getElementById('header');
    if (window.scrollY > 100) {
        header.classList.add('header-scrolled');
    } else {
        header.classList.remove('header-scrolled');
    }
});


// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});


// WhatsApp Business phone number
const WHATSAPP_NUMBER = '51993304853';

// Booking Form - WhatsApp Integration
document.addEventListener('DOMContentLoaded', function() {
    const bookingForm = document.getElementById('bookingForm');
    const contactForm = document.getElementById('contactForm');
    
    if (bookingForm) {
        bookingForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form values
            const name = document.getElementById('bookingName').value;
            const email = document.getElementById('bookingEmail').value;
            const phone = document.getElementById('bookingPhone').value;
            const type = document.getElementById('bookingType').value;
            const date = document.getElementById('bookingDate').value;
            const time = document.getElementById('bookingTime').value;
            const notes = document.getElementById('bookingNotes').value;
            
            // Format the WhatsApp message
            let message = `🎾 *SOLICITUD DE RESERVA*\n\n`;
            message += `👤 *Nombre:* ${name}\n`;
            message += `📧 *Email:* ${email}\n`;
            message += `📱 *Teléfono:* ${phone}\n`;
            message += `🏆 *Tipo de Entrenamiento:* ${type}\n`;
            message += `📅 *Fecha Preferida:* ${date}\n`;
            message += `🕐 *Horario:* ${time}\n`;
            if (notes) {
                message += `\n📝 *Notas:* ${notes}`;
            }
            
            // Encode message for URL
            const encodedMessage = encodeURIComponent(message);
            
            // Create WhatsApp URL
            const whatsappURL = `https://api.whatsapp.com/send?phone=${WHATSAPP_NUMBER}&text=${encodedMessage}`;
            
            // Open WhatsApp in new tab
            window.open(whatsappURL, '_blank');
            
            // Optional: Reset form after submission
            // bookingForm.reset();
        });
    }
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form values
            const name = document.getElementById('contactName').value;
            const email = document.getElementById('contactEmail').value;
            const subject = document.getElementById('contactSubject').value;
            const message = document.getElementById('contactMessage').value;
            
            // Format the WhatsApp message
            let whatsappMessage = `💬 *MENSAJE DE CONTACTO*\n\n`;
            whatsappMessage += `👤 *Nombre:* ${name}\n`;
            whatsappMessage += `📧 *Email:* ${email}\n`;
            whatsappMessage += `📌 *Asunto:* ${subject}\n\n`;
            whatsappMessage += `*Mensaje:*\n${message}`;
            
            // Encode message for URL
            const encodedMessage = encodeURIComponent(whatsappMessage);
            
            // Create WhatsApp URL
            const whatsappURL = `https://api.whatsapp.com/send?phone=${WHATSAPP_NUMBER}&text=${encodedMessage}`;
            
            // Open WhatsApp in new tab
            window.open(whatsappURL, '_blank');
            
            // Optional: Reset form after submission
            // contactForm.reset();
        });
    }
});
