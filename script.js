
document.getElementById('start-btn').addEventListener('click', () => {
  document.getElementById('intro-screen').style.display = 'none';
  document.getElementById('candle-screen').style.display = 'block';
});

document.getElementById('blow-btn').addEventListener('click', () => {
  document.getElementById('candle-screen').style.display = 'none';
  document.getElementById('card-creator').style.display = 'block';
});

document.getElementById('birthday-form').addEventListener('submit', function (e) {
  e.preventDefault();

  const photoFile = document.getElementById('photo-input').files[0];
  const musicFile = document.getElementById('music-input').files[0];
  const message = document.getElementById('message').value;

  if (photoFile && musicFile) {
    const reader = new FileReader();
    reader.onload = function () {
      document.getElementById('photo-preview').src = reader.result;
    };
    reader.readAsDataURL(photoFile);

    const audioURL = URL.createObjectURL(musicFile);
    const audio = document.getElementById('birthday-audio');
    audio.src = audioURL;

    document.getElementById('card-creator').style.display = 'none';
    document.getElementById('birthday-card').style.display = 'block';
    document.getElementById('card-message').textContent = message;
  }
});
