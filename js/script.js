// מנגנון ה-Reveal המודרני והמעולה שלך (IntersectionObserver)
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: .14 });

document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

// לוגיקה מעודכנת לקרוסלה עם 5 המלצות (20% לכל שקף) ופעולה חלקה ב-RTL
let currentSlide = 0;
const totalSlides = 5; // עודכן ל-5 המלצות

function moveCarousel(direction) {
  currentSlide += direction;
  
  // מעבר מעגלי תקין בין השקפים
  if (currentSlide < 0) {
    currentSlide = totalSlides - 1;
  } else if (currentSlide >= totalSlides) {
    currentSlide = 0;
  }
  
  const track = document.getElementById('carouselTrack');
  if (track) {
    // תיקון נקודה: style.transform. זז בצעדים של 20% ימינה ושמאלה
    track.style.transform = `translateX(${currentSlide * 20}%)`;
  }
}
