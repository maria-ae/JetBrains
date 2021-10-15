let upper = document.getElementById("upper-case");
let lower = document.getElementById("lower-case");
let proper = document.getElementById("proper-case");
let sentence = document.getElementById("sentence-case");

upper.addEventListener("click", function () {
    let text = document.querySelector("textarea");
    text.value = text.value.toUpperCase();
});

lower.addEventListener("click", function () {
    let text = document.querySelector("textarea");
    text.value = text.value.toLowerCase();
});

proper.addEventListener("click", function () {
    let text = document.querySelector("textarea");
    let words = text.value.split(" ");
    upperFirst(words);
    text.value = words.join(" ");
});

sentence.addEventListener("click", function () {
    let text = document.querySelector("textarea");
    let words = text.value.split(/\. /);
    upperFirst(words);
    text.value = words.join(". ");
});

function upperFirst(words) {
    for (let i = 0; i < words.length; i++) {
        let word = words[i];
        words[i] = word.slice(0, 1).toUpperCase() + word.slice(1).toLowerCase();
    }
}

function download(filename, text) {
    let element = document.createElement('a');
    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
    element.setAttribute('download', filename);
    element.style.display = 'none';
    document.body.appendChild(element);

    element.click();
    document.body.removeChild(element);
}

document.getElementById("save-text-file").addEventListener("click", function(){
    // Generate download of hello.txt file with some content
    let text = document.getElementById("textarea").value;
    let filename = "text.txt";

    download(filename, text);
}, false);

