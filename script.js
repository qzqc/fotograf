document.addEventListener('DOMContentLoaded', function() {
    const imageContainer = document.getElementById('display-image');
    const imagePath = 'assets/'; // assets klasöründeki dosyaların yolu
    
    // assets klasöründeki ilk dosyayı göstermek için
    fetch(imagePath)
        .then(response => {
            if (response.ok) {
                return response.blob();
            } else {
                console.error('Dosya bulunamadı.');
            }
        })
        .then(blob => {
            const imageUrl = URL.createObjectURL(blob);
            const imageElement = document.createElement('img');
            imageElement.src = imageUrl;
            imageContainer.appendChild(imageElement);
        });
});
