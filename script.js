
window.onload = function () {

    loadData();
}


function loadData() {
    const submit = document.getElementById("submit");
    submit.addEventListener("click",function(){
        
    let word = document.getElementById("input-word").value;
        console.log("clicked");
        console.log(word);
        if (word.length>0) {
            console.log(word);
            let url = `https://dictionary.yandex.net/api/v1/dicservice.json/lookup?key=dict.1.1.20200815T103100Z.6323acb148a5dba1.ff2cdbe20f69fceaf4a44fd549008a330fbda6c0&lang=en-en&text=${word}`;

            fetch(url)
                .then(response => response.json())
                .then(data => extractData(data))
                .catch(err => console.log(err))
        }else{
            document.getElementById("result").innerText = "Type a word";
        }
    })
    
}
function extractData(data) {
    document.getElementById("main").innerText = "";
    document.getElementById("result").innerText = "";
    document.getElementById("syn").innerText = "";
    let def = data.def;
    console.log(def);
    for (let i = 0; i < def.length; i++) {
        let text = def[i].text;
        let pos = def[i].pos;
        let tr = def[i].tr;
        console.log(text, pos);
        document.getElementById("main").innerText = `${text} - [${pos}]`;
        document.getElementById("syn").innerText = `Similar`;
        for(let i=0; i<tr.length; i++){
            let text = tr[i].text;
            let pos = tr[i].pos;
            console.log(text, pos);
            let val = `${text} - [${pos}]
            `;
            document.getElementById("result").innerText += val;
        }
    }
}
