/**
 * DyslexiaBuddy Website - Main JavaScript
 * Handles all interactive functionality including demo controls, 
 * mobile menu, scroll reveal, and accessibility features
 */

// ============================================
// Accessibility Toggle Logic
// ============================================
let isDyslexiaMode = false;
const toggleButton = document.getElementById('a11y-toggle');
const toggleCircle = document.getElementById('toggle-circle');

function toggleDyslexiaMode() {
    isDyslexiaMode = !isDyslexiaMode;
    
    if (isDyslexiaMode) {
        document.body.classList.add('dyslexia-mode');
        if (toggleButton) {
            toggleButton.classList.remove('bg-gray-300');
            toggleButton.classList.add('bg-brand-blue');
        }
        if (toggleCircle) {
            toggleCircle.classList.add('translate-x-6');
            toggleCircle.classList.remove('translate-x-1');
        }
    } else {
        document.body.classList.remove('dyslexia-mode');
        if (toggleButton) {
            toggleButton.classList.add('bg-gray-300');
            toggleButton.classList.remove('bg-brand-blue');
        }
        if (toggleCircle) {
            toggleCircle.classList.remove('translate-x-6');
            toggleCircle.classList.add('translate-x-1');
        }
    }
}

// ============================================
// Demo Section Logic
// ============================================
const demoTextContainer = document.getElementById('demo-text-container');
const demoText = document.getElementById('demo-text');

let isSpaced = false;
let isComicFont = false;
let isLooseLine = false;
let isYellowBg = false;
let focusInterval;
let isFocusing = false;
let isMagicMode = false;
let isCustomizeOpen = false;

/**
 * Helper to toggle active state styles for buttons
 * @param {string} id - Button element ID
 * @param {boolean} isActive - Whether button should be active
 */
function toggleBtnState(id, isActive) {
    const btn = document.getElementById(id);
    if (!btn) return;
    
    if (id === 'btn-bg') {
        // Special case for yellow background button
        if (isActive) {
            btn.classList.add('ring-2', 'ring-yellow-500', 'ring-offset-2', 'bg-yellow-200');
        } else {
            btn.classList.remove('ring-2', 'ring-yellow-500', 'ring-offset-2', 'bg-yellow-200');
        }
    } else {
        // Standard buttons
        if (isActive) {
            btn.classList.remove('bg-white', 'text-slate-700', 'border-gray-300', 'hover:bg-gray-50');
            btn.classList.add('bg-slate-800', 'text-white', 'border-slate-800', 'hover:bg-slate-700');
        } else {
            btn.classList.remove('bg-slate-800', 'text-white', 'border-slate-800', 'hover:bg-slate-700');
            btn.classList.add('bg-white', 'text-slate-700', 'border-gray-300', 'hover:bg-gray-50');
        }
    }
}

/**
 * Toggle customize panel visibility
 */
function toggleCustomize() {
    isCustomizeOpen = !isCustomizeOpen;
    const panel = document.getElementById('settings-panel');
    const btn = document.getElementById('btn-customize');

    if (!panel || !btn) return;

    if (isCustomizeOpen) {
        panel.classList.remove('hidden');
        btn.classList.add('bg-gray-100', 'border-gray-400');
        btn.classList.remove('bg-white');
    } else {
        panel.classList.add('hidden');
        btn.classList.remove('bg-gray-100', 'border-gray-400');
        btn.classList.add('bg-white');
    }
}

/**
 * Manual toggle for dyslexia-friendly mode (user clicks the toggle button)
 */
function manualMagicToggle() {
    setMagicMode(!isMagicMode);
}

/**
 * Set magic mode state - turns all features on or off
 */
function setMagicMode(enable) {
    isMagicMode = enable;
    const toggleBtn = document.getElementById('magic-toggle');
    const knob = document.getElementById('magic-knob');
    const icon = document.getElementById('magic-icon');

    if (!toggleBtn || !knob || !icon) return;

    if (enable) {
        // Turn everything ON
        toggleBtn.classList.remove('bg-gray-200');
        toggleBtn.classList.add('bg-brand-blue');
        knob.classList.add('translate-x-10');
        icon.classList.remove('opacity-0');
        
        // Activate individual features if they aren't already
        if (!isComicFont) demoToggleFont();
        if (!isSpaced) demoSpacing();
        if (!isLooseLine) demoLineHeight();
        if (!isYellowBg) demoYellowBg();
        
    } else {
        // Turn everything OFF
        toggleBtn.classList.add('bg-gray-200');
        toggleBtn.classList.remove('bg-brand-blue');
        knob.classList.remove('translate-x-10');
        icon.classList.add('opacity-0');

        // Deactivate individual features if they are on
        if (isComicFont) demoToggleFont();
        if (isSpaced) demoSpacing();
        if (isLooseLine) demoLineHeight();
        if (isYellowBg) demoYellowBg();
    }
}

/**
 * Check if all main toggles are active and update master toggle state
 */
function checkMagicState() {
    const allActive = isComicFont && isSpaced && isLooseLine && isYellowBg;
    const toggleBtn = document.getElementById('magic-toggle');
    const knob = document.getElementById('magic-knob');
    const icon = document.getElementById('magic-icon');

    if (!toggleBtn || !knob || !icon) return;

    if (allActive) {
        isMagicMode = true;
        toggleBtn.classList.remove('bg-gray-200');
        toggleBtn.classList.add('bg-brand-blue');
        knob.classList.add('translate-x-10');
        icon.classList.remove('opacity-0');
    } else {
        isMagicMode = false;
        toggleBtn.classList.add('bg-gray-200');
        toggleBtn.classList.remove('bg-brand-blue');
        knob.classList.remove('translate-x-10');
        icon.classList.add('opacity-0');
    }
}


/**
 * Text-to-speech functionality for demo section
 */
function demoSpeak() {
    // Stop any visual focus animation if speech starts
    if (isFocusing) {
        clearInterval(focusInterval);
        resetTextHTML();
        isFocusing = false;
        toggleBtnState('btn-focus', false);
    }

    if (!demoText) return;
    
    const text = demoText.innerText;
    if ('speechSynthesis' in window) {
        window.speechSynthesis.cancel();
        
        const utterance = new SpeechSynthesisUtterance(text);
        utterance.rate = 0.9;
        utterance.pitch = 1;
        
        if (demoTextContainer) {
            demoTextContainer.style.border = "2px solid #4C51BF";
        }
        
        utterance.onend = function() {
            if (demoTextContainer) {
                demoTextContainer.style.border = "1px solid #f3f4f6";
            }
        };

        window.speechSynthesis.speak(utterance);
    } else {
        alert("Sorry, your browser doesn't support text-to-speech.");
    }
}

/**
 * Toggle between Comic Sans and Arial fonts
 */
function demoToggleFont() {
    if (!demoText) return;
    
    isComicFont = !isComicFont;
    toggleBtnState('btn-font', isComicFont);
    
    if (isComicFont) {
        demoText.style.fontFamily = "'Comic Sans MS', 'Chalkboard SE', sans-serif";
    } else {
        demoText.style.fontFamily = "Arial, sans-serif";
    }
    checkMagicState();
}

/**
 * Toggle letter and word spacing
 */
function demoSpacing() {
    if (!demoText) return;
    
    isSpaced = !isSpaced;
    toggleBtnState('btn-spacing', isSpaced);

    if (isSpaced) {
        demoText.style.letterSpacing = "0.1em";
        demoText.style.wordSpacing = "0.2em";
    } else {
        demoText.style.letterSpacing = "normal";
        demoText.style.wordSpacing = "normal";
    }
    checkMagicState();
}

/**
 * Toggle line height for better readability
 */
function demoLineHeight() {
    if (!demoText) return;
    
    isLooseLine = !isLooseLine;
    toggleBtnState('btn-height', isLooseLine);

    if (isLooseLine) {
        demoText.classList.remove('leading-relaxed');
        demoText.style.lineHeight = "2.5";
    } else {
        demoText.style.lineHeight = "";
        demoText.classList.add('leading-relaxed');
    }
    checkMagicState();
}

/**
 * Toggle yellow background for better contrast
 */
function demoYellowBg() {
    if (!demoTextContainer) return;
    
    isYellowBg = !isYellowBg;
    toggleBtnState('btn-bg', isYellowBg);

    if (isYellowBg) {
        demoTextContainer.classList.remove('bg-white');
        demoTextContainer.style.backgroundColor = "#FEF9C3"; // Tailwind yellow-100
        demoTextContainer.style.color = "#000"; // Ensure contrast
    } else {
        demoTextContainer.style.backgroundColor = "";
        demoTextContainer.classList.add('bg-white');
        demoTextContainer.style.color = "";
    }
    checkMagicState();
}

/**
 * Word-by-word focus highlighting for reading assistance
 */
function demoWordFocus() {
    if (!demoText) return;
    
    if (isFocusing) {
        // Stop it
        clearInterval(focusInterval);
        resetTextHTML();
        isFocusing = false;
        toggleBtnState('btn-focus', false);
        return;
    }

    isFocusing = true;
    toggleBtnState('btn-focus', true);
    const words = demoText.innerText.split(' ');
    demoText.innerHTML = words.map(word => 
        `<span class="transition-colors duration-200 px-1 rounded">${word}</span>`
    ).join(' ');
    
    const spans = demoText.querySelectorAll('span');
    let i = 0;

    focusInterval = setInterval(() => {
        // Clear previous highlight
        if (i > 0) spans[i-1].style.backgroundColor = 'transparent';
        if (i >= spans.length) {
            i = 0; // Loop
        }
        
        // Highlight current word
        spans[i].style.backgroundColor = '#FCD34D'; // Yellow-300 highlight
        i++;
    }, 400); // Speed of reading
}

/**
 * Reset text HTML to remove span wrappers
 */
function resetTextHTML() {
    if (!demoText) return;
    // Basic reset to remove spans without losing text
    demoText.innerText = demoText.innerText; 
}

// ============================================
// Mobile Menu
// ============================================
function toggleMobileMenu() {
    const menu = document.getElementById('mobile-menu');
    if (menu) {
        menu.classList.toggle('hidden');
    }
}

// ============================================
// Scroll Reveal Animation
// ============================================
function reveal() {
    const reveals = document.querySelectorAll(".reveal");
    const windowHeight = window.innerHeight;
    const elementVisible = 150;
    
    reveals.forEach((element) => {
        const elementTop = element.getBoundingClientRect().top;
        if (elementTop < windowHeight - elementVisible) {
            element.classList.add("active");
        }
    });
}

// Initialize scroll reveal on page load and scroll
window.addEventListener("scroll", reveal);
reveal(); // Run once on page load
