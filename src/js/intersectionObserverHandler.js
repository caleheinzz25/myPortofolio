const cards = document.querySelectorAll('.card'); 

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        entry.target.classList.toggle('show', entry.isIntersecting);
        if (entry.isIntersecting) observer.unobserve(entry.target);
    });
}, {
    threshold: 0.5,
    rootMargin: '50px'
});

const cardContainer = document.querySelector('.card-container');

// Fungsi delay untuk menunggu beberapa waktu
const delay = ms => new Promise(resolve => setTimeout(resolve, ms));

const loadNewCard = async () => {
    for (let i = 0; i < 10; i++) {
        const newCard = document.createElement('div');
        newCard.classList.add('card');
        newCard.innerHTML = `Hey, it's a new Card`;
        observer.observe(newCard);
        cardContainer.appendChild(newCard);
    }
    
    // Menambahkan elemen loading
    const loading = document.createElement('div');
    loading.classList.add('card', 'loading');
    loading.innerHTML = `Loading.....`;
    observer.observe(loading);
    cardContainer.appendChild(loading);
}

const lastCardObserver = new IntersectionObserver(async entries => {
    const lastCard = entries[0];
    if (!lastCard.isIntersecting) return;
    
    // Jika elemen terakhir adalah "loading", tunggu 2 detik
    if (lastCard.target.classList.contains('loading')) {
        await delay(2000); // Tunggu 2 detik
    }
    
    // Muat kartu baru dan atur observer pada elemen terakhir
    await loadNewCard();
    lastCardObserver.unobserve(lastCard.target);
    if (lastCard.target.classList.contains('loading')) {
        lastCard.target.innerHTML = `Hey, i'ts a new Card`
        lastCard.target.classList.remove('loading');
    }
    lastCardObserver.observe(document.querySelector('.card:last-child'));
    
}, {
    threshold: 0.5
});

// Observasi elemen terakhir saat inisialisasi
lastCardObserver.observe(document.querySelector('.card:last-child'));

// Observasi setiap kartu yang ada saat inisialisasi
cards.forEach(card => {
    observer.observe(card);
});
