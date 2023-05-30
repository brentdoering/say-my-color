const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

const rec = new SpeechRecognition();

rec.lang = 'en-US';
rec.continous = true;

rec.onresult = function(e) {
  const acceptedColors = [
    'red',
    'blue',
    'yellow',
    'black',
    'white',
    'green',
    'purple'
  ];

  for (let i = e.resultIndex; i < e.results.length; i++) {
    const script = e.results[i][0].transcript.toLowerCase().trim();

    if (acceptedColors.includes(script)) {
      document.body.style.backgroundColor = script;
    } else { 
      alert('Please say a color');
    }
  }
}

rec.start();
