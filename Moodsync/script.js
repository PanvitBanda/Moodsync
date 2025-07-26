function setMood(mood) {
  document.body.className = '';
  document.body.classList.add(mood);

  const moodTitle = document.getElementById('mood-title');
  const moodQuote = document.getElementById('mood-quote');
  const moodImage = document.getElementById('mood-image');
  const audioSource = document.getElementById('audio-source');
  const moodAudio = document.getElementById('mood-audio');

  const moodData = {
    happy: {
      title: "You're feeling Happy! 😊",
      quote: "Happiness is not something ready made. It comes from your own actions.",
      image: "assets/happy.jpg",
      audio: "assets/happy.mp3"
    },
    sad: {
      title: "Feeling a little blue? 😢",
      quote: "Tears come from the heart and not from the brain.",
      image: "assets/sad.jpg",
      audio: "assets/sad.mp3"
    },
    calm: {
      title: "Enjoy the calmness 🌿",
      quote: "Peace comes from within. Do not seek it without.",
      image: "assets/calm.jpg",
      audio: "assets/calm.mp3"
    },
    focused: {
      title: "Time to Focus 🎯",
      quote: "Concentrate all your thoughts upon the work in hand.",
      image: "assets/focused.jpg",
      audio: "assets/focused.mp3"
    },
    energetic: {
      title: "Let's Get Energetic! 🔥",
      quote: "Energy and persistence conquer all things.",
      image: "assets/energetic.jpg",
      audio: "assets/energetic.mp3"
    },
    love: {
      title: "Spread the Love 💖",
      quote: "Love is composed of a single soul inhabiting two bodies.",
      image: "assets/love.jpg",
      audio: "assets/love.mp3"
    },
    anxious: {
      title: "It’s okay to feel anxious 😟",
      quote: "Just when the caterpillar thought the world was ending, it turned into a butterfly.",
      image: "assets/anxious.jpg",
      audio: "assets/anxious.mp3"
    }
  };

  const selectedMood = moodData[mood] || {
    title: "Welcome to Moodsync",
    quote: "Select a mood to personalize your experience.",
    image: "assets/default.jpg",
    audio: ""
  };

  // Animate all content fade out
  [moodTitle, moodQuote, moodImage].forEach(el => el.classList.remove("show"));

  setTimeout(() => {
    // Update text/image/audio
    moodTitle.textContent = selectedMood.title;
    moodQuote.textContent = selectedMood.quote;
    moodImage.src = selectedMood.image;
    audioSource.src = selectedMood.audio;
    moodAudio.load();

    // Animate back in
    [moodTitle, moodQuote, moodImage].forEach(el => el.classList.add("show"));
  }, 300);
}
