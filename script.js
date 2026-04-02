// JSON dosyasını oku
fetch('projects.json')
    .then(response => response.json())
    .then(data => {
        const container = document.getElementById('projects-container');
        
        data.forEach(project => {
            // Her proje için bir kart yapısı oluştur
            const cardHTML = `
                <div class="col-md-6 col-lg-4">
                    <div class="card h-100 shadow-sm border-0">
                        <img src="${project.image}" class="card-img-top" alt="${project.title}" style="height: 350px; object-fit: cover;">
                        <div class="card-body d-flex flex-column">
                            <span class="badge bg-info align-self-start mb-3">${project.tag}</span>
                            <h5 class="card-title">${project.title}</h5>
                            <p class="card-text text-muted" style="font-size: 0.9rem;">${project.description}</p>
                            <a href="${project.github}" target="_blank" class="btn btn-outline-dark btn-sm mt-auto align-self-end">GitHub'da Gör</a>
                        </div>
                    </div>
                </div>
            `;
            // Oluşturulan kartı kapsayıcıya ekle
            container.innerHTML += cardHTML;
        });
    })
    .catch(error => console.error('Veri çekilirken hata oluştu:', error));