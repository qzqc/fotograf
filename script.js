document.addEventListener('DOMContentLoaded', function() {
    const image = document.getElementById('display-image');
    const imagePath = 'assets/';
    
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
            image.src = imageUrl;
        });
});
