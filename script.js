// JSON dosyasını oku
fetch('projects.json')
    .then(response => response.json())
    .then(data => {
        const container = document.getElementById('projects-container');
        // 1. Fragment oluştur: DOM'a tek seferde ekleme yapmak için "geçici bir kutu"dur.
        const fragment = document.createDocumentFragment();
        
        data.forEach(project => {
            const col = document.createElement('div');
            col.className = 'col-md-6 col-lg-4';

            // Güvenli içerik oluşturma
            col.innerHTML = `
                <div class="card h-100 shadow-sm border-0">
                    <img src="" class="card-img-top project-img" style="height: 350px; object-fit: cover;">
                    <div class="card-body d-flex flex-column">
                        <span class="badge bg-info align-self-start mb-3 project-tag"></span>
                        <h5 class="card-title project-title"></h5>
                        <p class="card-text text-muted project-desc" style="font-size: 0.9rem;"></p>
                        <a href="" target="_blank" class="btn btn-outline-dark btn-sm mt-auto align-self-end project-link">GitHub'da Gör</a>
                    </div>
                </div>
            `;

            // 2. Veriyi textContent ile güvenli bir şekilde yerleştir
            col.querySelector('.project-img').src = project.image;
            col.querySelector('.project-img').alt = project.title;
            col.querySelector('.project-tag').textContent = project.tag;
            col.querySelector('.project-title').textContent = project.title;
            col.querySelector('.project-desc').textContent = project.description;
            col.querySelector('.project-link').href = project.github;

            fragment.appendChild(col);
        });

        // 3. Tüm kartları tek bir hamlede gerçek DOM'a bas
        container.appendChild(fragment);
    })
    .catch(error => console.error('Hata:', error));


fetch('skills.json')
    .then(response => response.json())
    .then(data => {
        const skillsContainer = document.getElementById('skills-container');
        const fragment = document.createDocumentFragment();

        data.forEach(group => {
            const col = document.createElement('div');
            col.className = 'col-md-6 col-lg-3';

            // Kart şablonunu oluştur (Liste kısmı boş)
            col.innerHTML = `
                <div class="skill-card">
                    <h5 class="skill-title mb-3"></h5>
                    <ul class="skill-list"></ul>
                </div>
            `;

            // Kategori başlığını güvenli şekilde ekle
            col.querySelector('.skill-title').textContent = group.category;

            const ul = col.querySelector('.skill-list');

            // Alt öğeleri (items) güvenli şekilde oluştur ve ekle
            group.items.forEach(item => {
                const li = document.createElement('li');
                li.className = 'skill-item';
                
                // İkonu HTML olarak, metni ise textContent ile güvenli ekliyoruz
                li.innerHTML = '<i class="bi bi-check2-circle"></i> ';
                const textNode = document.createTextNode(item); 
                li.appendChild(textNode);
                
                ul.appendChild(li);
            });

            fragment.appendChild(col);
        });

        skillsContainer.appendChild(fragment);
    })
    .catch(error => console.error('Skills yüklenirken hata:', error));


    const spinner = document.getElementById('loading-spinner');
const container = document.getElementById('projects-container');
