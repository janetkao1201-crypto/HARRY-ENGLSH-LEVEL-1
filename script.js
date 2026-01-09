let words = [];
let current = 0;


fetch('words.json')
.then(res => res.json())
.then(data => {
words = data;
showWord();
});


function showWord() {
const w = words[current];
document.getElementById('wordImage').src = w.image;
document.getElementById('chinese').innerText = w.chinese;


const choices = document.getElementById('choices');
choices.innerHTML = '';


[w.english, 'cat', 'banana'].sort(() => Math.random() - 0.5)
.forEach(c => {
const btn = document.createElement('button');
btn.innerText = c;
btn.onclick = () => checkAnswer(c);
choices.appendChild(btn);
});
}


function checkAnswer(answer) {
const correct = words[current].english;
document.getElementById('result').innerText =
answer === correct ? '✅ 答對了！' : '❌ 錯了！正確是 ' + correct;
}


function speakWord() {
const utter = new SpeechSynthesisUtterance(words[current].english);
utter.lang = 'en-US';
speechSynthesis.speak(utter);
}
