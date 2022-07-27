const container = document.querySelector('.container');
var timestamp = 0;
lyrics.forEach((e, i) => {
    if(i != 0) timestamp += e.duration;
    setTimeout(() => {
        container.innerHTML = '';
        var text = document.createElement('p');
        text.classList.add('text');
        text.textContent = e.text;
        container.appendChild(text);
    }, timestamp);
})
