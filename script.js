document.addEventListener('DOMContentLoaded', function() {
    const fileList = document.getElementById('file-list');
    const repo = 'qzqc/fotograf'; // GitHub kullanıcı adı ve depo adı
    const path = 'assets';

    fetch(`https://api.github.com/repos/${repo}/contents/${path}`)
        .then(response => response.json())
        .then(data => {
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
        })
        .catch(error => console.error('Hata:', error));
});
