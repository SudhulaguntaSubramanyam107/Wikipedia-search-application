let ser = document.getElementById("searchInput");
let res = document.getElementById("searchResults");

function createandnewsearch(i) {
    let {
        title,
        link,
        description
    } = i;
    let div = document.createElement("div");
    div.classList.add("result-item");


    let tit = document.createElement("a");
    tit.classList.add("result-url");
    tit.textContent = title;
    tit.href = link;
    tit.target = "_blank";
    div.appendChild(tit);

    let tbr = document.createElement("br");
    div.appendChild(tbr);

    let urla = document.createElement("a");
    urla.classList.add("result-url");
    urla.textContent = link;
    urla.href = link;
    urla.target = "_blank";
    div.appendChild(urla);

    let dbr = document.createElement("br");
    div.appendChild(dbr);

    let des = document.createElement("p");
    des.textContent = description;
    des.classList.add("link-description");
    div.appendChild(des);

    res.appendChild(div);
}

function display(search_results) {
    for (let i of search_results) {
        createandnewsearch(i);
    }
}

ser.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        let inp = ser.value;
        res.textContent = "";
        let url = "https://apis.ccbp.in/wiki-search?search=" + inp;
        let options = {
            method: "GET"
        };
        fetch(url, options)
            .then(function(response) {
                return response.json();
            })
            .then(function(jsondata) {
                let {
                    search_results
                } = jsondata;
                display(search_results);
            });
    }
});