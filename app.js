// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

// Form handling for subscription (this is a mock-up for demo purposes)
const pricingButtons = document.querySelectorAll('.pricing-plan .cta-button');

pricingButtons.forEach(button => {
  button.addEventListener('click', function() {
    const planType = this.closest('.pricing-plan').querySelector('h4').innerText;
    subscribe(planType);
  });
});

function subscribe(planType) {
  alert(`You have selected the ${planType}. Thank you for signing up!`);

  // Here, you can integrate payment gateway or form submission logic
  // For instance, sending user information to your backend or redirecting to a payment page
  console.log(`Subscribed to ${planType}`);
}

// Scroll to top when user clicks logo
const logo = document.querySelector('.logo');
logo.addEventListener('click', function() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Testimonials carousel functionality (optional)
let currentTestimonialIndex = 0;
const testimonials = document.querySelectorAll('.testimonial-item');

function showNextTestimonial() {
  testimonials[currentTestimonialIndex].classList.remove('active');
  currentTestimonialIndex = (currentTestimonialIndex + 1) % testimonials.length;
  testimonials[currentTestimonialIndex].classList.add('active');
}

setInterval(showNextTestimonial, 5000);  // Change testimonial every 5 seconds

// Adding active class for the first testimonial by default
testimonials[0].classList.add('active');

// Optional: Form submission for a newsletter (if added later)
const contactForm = document.querySelector('#contact-form');
if (contactForm) {
  contactForm.addEventListener('submit', function(e) {
    e.preventDefault();
    const email = document.querySelector('#email').value;
    console.log(`Form submitted with email: ${email}`);
    alert('Thank you for subscribing to our newsletter!');
    
    // Reset form after submission
    contactForm.reset();
  });
}
