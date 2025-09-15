document.addEventListener('DOMContentLoaded', () => {
  const galleryItems = document.querySelectorAll('.gallery-item');
  const lightbox = document.querySelector('.lightbox');
  const lightboxImage = document.querySelector('#lightbox-image');
  const closeBtn = document.querySelector('#close-btn');

  // Open the lightbox when a thumbnail is clicked
  galleryItems.forEach(item => {
    item.addEventListener('click', (event) => {
      const thumbnailSrc = event.target.src;
      const fullSizeSrc = thumbnailSrc.replace('-thumbnail', '');
      lightboxImage.src = fullSizeSrc;
      lightbox.style.display = 'flex';
    });
  });

  // Close the lightbox when the close button or the lightbox background is clicked
  closeBtn.addEventListener('click', () => {
    lightbox.style.display = 'none';
  });
  
  // This listener ensures clicking the background also closes the lightbox
  lightbox.addEventListener('click', (event) => {
    if (event.target !== lightboxImage) {
      lightbox.style.display = 'none';
    }
  });
});