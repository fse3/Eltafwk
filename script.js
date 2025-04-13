// Function to toggle dark/light mode
function toggleMode() {
    const body = document.body;
    const circle = document.querySelector(".circle");
    
    // Add a ripple effect when clicking
    createRippleEffect(circle);
    
    // Toggle the theme with a slight delay for better animation
    setTimeout(() => {
        body.classList.toggle("dark");
        body.classList.toggle("light");
    }, 150);
}

// Function to toggle language
function toggleLanguage() {
    const langToggle = document.querySelector(".lang-toggle");
    
    // Add a ripple effect when clicking
    createRippleEffect(langToggle);
    
    // Toggle between Arabic and English
    if (langToggle.textContent === "العربية") {
        // Switch to Arabic
        langToggle.textContent = "English";
        document.documentElement.lang = "ar";
        document.body.classList.add("rtl");
        translateToArabic();
    } else {
        // Switch to English
        langToggle.textContent = "العربية";
        document.documentElement.lang = "en";
        document.body.classList.remove("rtl");
        translateToEnglish();
    }
}

// Function to translate to Arabic
function translateToArabic() {
    // Example translations - you can expand this
    const translations = {
        "Eltafwk": "التفوق",
        "📚 Affordable summaries for every Egyptian student!": "📚 ملخصات بأسعار معقولة لكل طالب مصري!",
        "🎯 Perfect for Elementary & Preparatory levels": "🎯 مثالي لمستويات الابتدائي والإعدادي",
        "💸 Only 20 EGP per summarized lesson": "💸 فقط 20 جنيه مصري للدرس الملخص",
        "🚀 Study smart, save time, and succeed!": "🚀 ادرس بذكاء، وفر الوقت، وانجح!",
        "👨‍🏫 Clear, organized, and exam-focused notes": "👨‍🏫 ملاحظات واضحة ومنظمة وتركز على الامتحانات",
        "Clever exam-focused notes for students. Easily summarized and easy to study. 20 EGP per lesson.": "ملاحظات ذكية تركز على الامتحانات للطلاب. ملخصة بسهولة وسهلة الدراسة. 20 جنيه مصري للدرس الواحد.",
        "Visit Us on Facebook": "زورنا على فيسبوك",
        "📞 0123456789": "📞 0123456789"
    };
    
    // Replace text content with Arabic translations
    document.querySelectorAll('h1, h2, h3, p').forEach(el => {
        const originalText = el.textContent;
        if (translations[originalText]) {
            el.textContent = translations[originalText];
        }
    });
}

// Function to translate to English
function translateToEnglish() {
    // Example translations - reverse of the above
    const translations = {
        "التفوق": "Eltafwk",
        "📚 ملخصات بأسعار معقولة لكل طالب مصري!": "📚 Affordable summaries for every Egyptian student!",
        "🎯 مثالي لمستويات الابتدائي والإعدادي": "🎯 Perfect for Elementary & Preparatory levels",
        "💸 فقط 20 جنيه مصري للدرس الملخص": "💸 Only 20 EGP per summarized lesson",
        "🚀 ادرس بذكاء، وفر الوقت، وانجح!": "🚀 Study smart, save time, and succeed!",
        "👨‍🏫 ملاحظات واضحة ومنظمة وتركز على الامتحانات": "👨‍🏫 Clear, organized, and exam-focused notes",
        "ملاحظات ذكية تركز على الامتحانات للطلاب. ملخصة بسهولة وسهلة الدراسة. 20 جنيه مصري للدرس الواحد.": "Clever exam-focused notes for students. Easily summarized and easy to study. 20 EGP per lesson.",
        "زورنا على فيسبوك": "Visit Us on Facebook",
        "📞 0123456789": "📞 0123456789"
    };
    
    // Replace text content with English translations
    document.querySelectorAll('h1, h2, h3, p').forEach(el => {
        const originalText = el.textContent;
        if (translations[originalText]) {
            el.textContent = translations[originalText];
        }
    });
}

// Function to create a ripple effect
function createRippleEffect(element) {
    const ripple = document.createElement("span");
    const rect = element.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height);
    
    ripple.style.width = ripple.style.height = `${size * 2}px`;
    ripple.style.left = `${-size / 2}px`;
    ripple.style.top = `${-size / 2}px`;
    ripple.style.position = "absolute";
    ripple.style.borderRadius = "50%";
    ripple.style.backgroundColor = document.body.classList.contains("dark") ? "rgba(255,255,255,0.2)" : "rgba(0,0,0,0.1)";
    ripple.style.transform = "scale(0)";
    ripple.style.animation = "ripple 0.6s linear";
    ripple.style.pointerEvents = "none";
    
    element.style.position = element.style.position || "relative";
    element.style.overflow = element.style.overflow || "hidden";
    element.appendChild(ripple);
    
    // Create CSS for ripple animation if it doesn't exist
    if (!document.querySelector('#rippleStyle')) {
        const style = document.createElement('style');
        style.id = 'rippleStyle';
        style.textContent = `
            @keyframes ripple {
                to {
                    transform: scale(2);
                    opacity: 0;
                }
            }
        `;
        document.head.appendChild(style);
    }
    
    // Remove the ripple after animation
    setTimeout(() => {
        ripple.remove();
    }, 600);
}

// Run on page load to ensure correct icon and state
document.addEventListener("DOMContentLoaded", function() {
    const body = document.body;
    
    // Initialize the light/dark mode state
    if (!body.classList.contains("dark") && !body.classList.contains("light")) {
        body.classList.add("dark"); // Default to dark mode
    }
    
    // Add CSS for ripple animation
    if (!document.querySelector('#rippleStyle')) {
        const style = document.createElement('style');
        style.id = 'rippleStyle';
        style.textContent = `
            @keyframes ripple {
                to {
                    transform: scale(2);
                    opacity: 0;
                }
            }
        `;
        document.head.appendChild(style);
    }
});