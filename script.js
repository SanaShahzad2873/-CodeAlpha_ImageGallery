// ============================================
// LIONEL MESSI GALLERY - FULLY WORKING SEARCH
// ============================================

const imageCollection = [
    // ==================== BARCELONA ERA ====================
    { 
        id: 1, 
        title: "Messi Barcelona Legend", 
        category: "barcelona", 
        desc: "The GOAT in his prime at Camp Nou wearing the iconic Blaugrana jersey",
        url: "https://images.pexels.com/photos/46798/the-ball-stadion-football-the-pitch-46798.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop"
    },
    { 
        id: 2, 
        title: "Messi The Magician", 
        category: "barcelona", 
        desc: "Dribbling past defenders with effortless grace at Camp Nou",
        url: "https://images.pexels.com/photos/3621104/pexels-photo-3621104.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop"
    },
    { 
        id: 3, 
        title: "Messi Number 10 Legacy", 
        category: "barcelona", 
        desc: "Proudly displaying the legendary number 10 jersey for Barcelona",
        url: "https://images.pexels.com/photos/47730/football-ball-soccer-barcelona-47730.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop"
    },
    { 
        id: 4, 
        title: "Messi Celebration", 
        category: "barcelona", 
        desc: "Iconic celebration after scoring another masterpiece goal",
        url: "https://images.pexels.com/photos/316205/pexels-photo-316205.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop"
    },
    { 
        id: 5, 
        title: "Messi Captain Armband", 
        category: "barcelona", 
        desc: "Leading his beloved Barcelona as team captain",
        url: "https://images.pexels.com/photos/361217/pexels-photo-361217.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop"
    },
    
    // ==================== ARGENTINA NATIONAL TEAM ====================
    { 
        id: 6, 
        title: "Messi World Cup Champion", 
        category: "argentina", 
        desc: "Lifting the FIFA World Cup trophy for Argentina in Qatar 2022",
        url: "https://images.pexels.com/photos/46798/the-ball-stadion-football-the-pitch-46798.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop"
    },
    { 
        id: 7, 
        title: "Messi Copa America Glory", 
        category: "argentina", 
        desc: "Celebrating Copa America victory with the Argentina national team",
        url: "https://images.pexels.com/photos/316205/pexels-photo-316205.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop"
    },
    { 
        id: 8, 
        title: "Messi Argentina Jersey", 
        category: "argentina", 
        desc: "Wearing the famous blue and white stripes of Argentina",
        url: "https://images.pexels.com/photos/361217/pexels-photo-361217.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop"
    },
    { 
        id: 9, 
        title: "Messi National Anthem", 
        category: "argentina", 
        desc: "Singing the national anthem with passion and pride",
        url: "https://images.pexels.com/photos/3621104/pexels-photo-3621104.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop"
    },
    { 
        id: 10, 
        title: "Messi Golden Ball Winner", 
        category: "argentina", 
        desc: "Receiving the World Cup Golden Ball award for best player",
        url: "https://images.pexels.com/photos/47730/football-ball-soccer-barcelona-47730.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop"
    },
    
    // ==================== TROPHIES & ACHIEVEMENTS ====================
    { 
        id: 11, 
        title: "Messi Ballon dOr Winner", 
        category: "trophies", 
        desc: "Record-breaking 8th Ballon d'Or award ceremony",
        url: "https://images.pexels.com/photos/46798/the-ball-stadion-football-the-pitch-46798.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop"
    },
    { 
        id: 12, 
        title: "Messi Champions League Trophy", 
        category: "trophies", 
        desc: "Holding the Champions League trophy with Barcelona",
        url: "https://images.pexels.com/photos/316205/pexels-photo-316205.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop"
    },
    { 
        id: 13, 
        title: "Messi La Liga Champion", 
        category: "trophies", 
        desc: "Celebrating multiple La Liga championship victories",
        url: "https://images.pexels.com/photos/361217/pexels-photo-361217.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop"
    },
    { 
        id: 14, 
        title: "Messi Golden Boot Award", 
        category: "trophies", 
        desc: "Receiving the European Golden Boot award for top scorer",
        url: "https://images.pexels.com/photos/3621104/pexels-photo-3621104.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop"
    },
    { 
        id: 15, 
        title: "Messi Trophy Collection", 
        category: "trophies", 
        desc: "Posing with his incredible collection of silverware",
        url: "https://images.pexels.com/photos/47730/football-ball-soccer-barcelona-47730.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop"
    },
    
    // ==================== ICONIC MOMENTS ====================
    { 
        id: 16, 
        title: "Messi Goal of the Century", 
        category: "iconic", 
        desc: "Recreating Maradona's legendary goal against Getafe",
        url: "https://images.pexels.com/photos/46798/the-ball-stadion-football-the-pitch-46798.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop"
    },
    { 
        id: 17, 
        title: "Messi Jersey Gesture", 
        category: "iconic", 
        desc: "Iconic shirt celebration at the Santiago Bernabeu",
        url: "https://images.pexels.com/photos/316205/pexels-photo-316205.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop"
    },
    { 
        id: 18, 
        title: "Messi Free Kick Master", 
        category: "iconic", 
        desc: "Perfecting the art of free kicks with precision",
        url: "https://images.pexels.com/photos/361217/pexels-photo-361217.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop"
    },
    { 
        id: 19, 
        title: "Messi UNICEF Ambassador", 
        category: "iconic", 
        desc: "Supporting children's rights as UNICEF Goodwill Ambassador",
        url: "https://images.pexels.com/photos/3621104/pexels-photo-3621104.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop"
    },
    { 
        id: 20, 
        title: "Messi Legacy Continues", 
        category: "iconic", 
        desc: "Still creating magic at Inter Miami and inspiring millions",
        url: "https://images.pexels.com/photos/47730/football-ball-soccer-barcelona-47730.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop"
    }
];

// ============================================
// APPLICATION STATE
// ============================================
let activeFilter = 'all';
let searchQuery = '';
let currentImages = [...imageCollection];
let currentLightboxIndex = 0;

const galleryGrid = document.getElementById('galleryGrid');
const searchInput = document.getElementById('searchInput');
const filterChips = document.querySelectorAll('.filter-chip');
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightboxImg');
const lbTitle = document.getElementById('lbTitle');
const lbDesc = document.getElementById('lbDesc');
const totalCountSpan = document.getElementById('totalCount');
const displayCountSpan = document.getElementById('displayCount');
const loadingDiv = document.getElementById('loading');
const noResultsDiv = document.getElementById('noResults');
const scrollTopBtn = document.getElementById('scrollTopBtn');

function updateStats() {
    totalCountSpan.textContent = imageCollection.length;
    displayCountSpan.textContent = currentImages.length;
}

function getCategoryIcon(category) {
    const icons = {
        barcelona: 'fa-futbol',
        argentina: 'fa-flag-checkered',
        trophies: 'fa-trophy',
        iconic: 'fa-star'
    };
    return icons[category] || 'fa-image';
}

function getCategoryColor(category) {
    const colors = {
        barcelona: '#e74c3c',
        argentina: '#3498db',
        trophies: '#f1c40f',
        iconic: '#9b59b6'
    };
    return colors[category] || '#e74c3c';
}

function filterAndSearch() {
    loadingDiv.style.display = 'block';
    galleryGrid.style.display = 'none';
    
    setTimeout(() => {
        let filtered = [...imageCollection];
        
        // Apply category filter
        if (activeFilter !== 'all') {
            filtered = filtered.filter(img => img.category === activeFilter);
        }
        
        // Apply search filter - SEARCH NOW WORKS!
        if (searchQuery.trim() !== '') {
            const query = searchQuery.toLowerCase();
            filtered = filtered.filter(img => 
                img.title.toLowerCase().includes(query) ||
                img.desc.toLowerCase().includes(query) ||
                img.category.toLowerCase().includes(query)
            );
        }
        
        currentImages = filtered;
        updateStats();
        renderGallery();
        loadingDiv.style.display = 'none';
    }, 200);
}

function renderGallery() {
    if (currentImages.length === 0) {
        galleryGrid.style.display = 'none';
        noResultsDiv.style.display = 'block';
        return;
    }
    
    galleryGrid.style.display = 'grid';
    noResultsDiv.style.display = 'none';
    galleryGrid.innerHTML = '';
    
    currentImages.forEach((img, idx) => {
        const card = document.createElement('div');
        card.className = 'gallery-card';
        const categoryColor = getCategoryColor(img.category);
        
        card.innerHTML = `
            <div class="card-image">
                <img src="${img.url}" 
                     alt="${img.title}"
                     loading="lazy">
                <div class="card-category" style="background: ${categoryColor}20; border: 1px solid ${categoryColor}40;">
                    <i class="fas ${getCategoryIcon(img.category)}"></i> ${img.category}
                </div>
                <div class="card-overlay">
                    <div class="card-title">${img.title}</div>
                    <div class="card-desc">${img.desc}</div>
                </div>
            </div>
        `;
        
        card.addEventListener('click', () => {
            currentLightboxIndex = idx;
            openLightbox();
        });
        
        galleryGrid.appendChild(card);
    });
}

function openLightbox() {
    const img = currentImages[currentLightboxIndex];
    lightboxImg.src = img.url;
    lbTitle.textContent = img.title;
    lbDesc.textContent = img.desc;
    lightbox.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeLightbox() {
    lightbox.classList.remove('active');
    document.body.style.overflow = 'auto';
}

function nextImage() {
    if (currentLightboxIndex < currentImages.length - 1) {
        currentLightboxIndex++;
        openLightbox();
    }
}

function prevImage() {
    if (currentLightboxIndex > 0) {
        currentLightboxIndex--;
        openLightbox();
    }
}

window.addEventListener('scroll', () => {
    if (window.scrollY > 500) {
        scrollTopBtn.classList.add('show');
    } else {
        scrollTopBtn.classList.remove('show');
    }
});

scrollTopBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

// SEARCH EVENT LISTENER - THIS MAKES SEARCH WORK
searchInput.addEventListener('input', (e) => {
    searchQuery = e.target.value;
    console.log("Searching for:", searchQuery); // For debugging
    filterAndSearch();
});

filterChips.forEach(chip => {
    chip.addEventListener('click', () => {
        filterChips.forEach(c => c.classList.remove('active'));
        chip.classList.add('active');
        activeFilter = chip.getAttribute('data-filter');
        filterAndSearch();
    });
});

document.getElementById('closeLightbox').addEventListener('click', closeLightbox);
document.getElementById('prevBtn').addEventListener('click', prevImage);
document.getElementById('nextBtn').addEventListener('click', nextImage);

document.addEventListener('keydown', (e) => {
    if (lightbox.classList.contains('active')) {
        if (e.key === 'Escape') closeLightbox();
        if (e.key === 'ArrowLeft') prevImage();
        if (e.key === 'ArrowRight') nextImage();
    }
});

lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox) closeLightbox();
});

function init() {
    updateStats();
    renderGallery();
}

init();
