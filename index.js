const imageInput = document.querySelector('.img-url-input');
const previewImg = document.querySelector('.preview-image');

imageInput.addEventListener('change', function () {
  const reader = new FileReader();
  reader.addEventListener('load', function () {
    previewImg.style.backgroundImage = `url(${this.result})`;
  });
  reader.readAsDataURL(this.files[0]);
});
