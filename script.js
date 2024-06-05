document.addEventListener('DOMContentLoaded', function() {
    const fileList = document.getElementById('file-list');
    const repo = 'qzqc/fotograf'; // GitHub kullanıcı adı ve depo adı
    const path = 'assets'; // Dosyaların bulunduğu klasör

    fetch(`https://api.github.com/repos/${repo}/contents/${path}`)
        .then(response => {
            if (!response.ok) {
                throw new Error('GitHub API isteği başarısız oldu');
            }
            return response.json();
        })
        .then(data => {
            if (Array.isArray(data)) {
                data.forEach(file => {
                    if (file.type === 'file') {
                        const listItem = document.createElement('li');
                        const link = document.createElement('a');
                        link.href = file.download_url;
                        link.textContent = file.name;
                        listItem.appendChild(link);
                        fileList.appendChild(listItem);
                    }
                });
            } else {
                console.error('Beklenmeyen API yanıtı', data);
            }
        })
        .catch(error => console.error('Hata:', error));
});
