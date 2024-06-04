document.getElementById('uploadButton').addEventListener('click', function() {
    const fileInput = document.getElementById('fileInput');
    const file = fileInput.files[0];
    
    if (file) {
        const reader = new FileReader();
        
        reader.onload = function(e) {
            const gallery = document.getElementById('gallery');
            const photoContainer = document.createElement('div');
            photoContainer.classList.add('photo');
            
            const img = document.createElement('img');
            img.src = e.target.result;
            
            const deleteButton = document.createElement('button');
            deleteButton.classList.add('delete-button');
            deleteButton.textContent = 'X';
            deleteButton.addEventListener('click', function() {
                gallery.removeChild(photoContainer);
            });
            
            photoContainer.appendChild(img);
            photoContainer.appendChild(deleteButton);
            gallery.appendChild(photoContainer);
        };
        
        reader.readAsDataURL(file);
    }
});
