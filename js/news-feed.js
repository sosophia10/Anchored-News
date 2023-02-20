const countryCodeMap = {
    ae: "United Arab Emirates",
    ar: "Argentina",
    at: "Austria",
    au: "Australia",
    be: "Belgium",
    bg: "Bulgaria",
    br: "Brazil",
    ca: "Canada",
    ch: "Switzerland",
    cn: "China",
    co: "Colombia",
    cu: "Cuba",
    cz: "Czech Republic",
    de: "Germany",
    eg: "Egypt",
    fr: "France",
    gb: "United Kingdom",
    gr: "Greece",
    hk: "Hong Kong",
    hu: "Hungary",
    id: "Indonesia",
    ie: "Ireland",
    il: "Israel",
    in: "India",
    it: "Italy",
    jp: "Japan",
    kr: "South Korea",
    lt: "Lithuania",
    lv: "Latvia",
    ma: "Morocco",
    mx: "Mexico",
    my: "Malaysia",
    ng: "Nigeria",
    nl: "Netherlands",
    no: "Norway",
    nz: "New Zealand",
    ph: "Philippines",
    pl: "Poland",
    pt: "Portugal",
    ro: "Romania",
    rs: "Serbia",
    ru: "Russia",
    sa: "Saudi Arabia",
    se: "Sweden",
    sg: "Singapore",
    si: "Slovenia",
    sk: "Slovakia",
    th: "Thailand",
    tr: "Turkey",
    tw: "Taiwan",
    ua: "Ukraine",
    us: "United States",
    ve: "Venezuela",
    za: "South Africa"
};




/////////////////////////////////////////////////
//const dates = ["23-02-16", "23-02-17"];
//const date = "23-02-17";

/*const root = document.getElementById("sources");
let code = "us";
let countryName = getCountryFullName(code);

function getCountryFullName(code) {
return countryCodeMap[code.toLowerCase()] || "Unknown";
}

//const src = `data/json/${date}`;

//fetch(`${src}/${code}.json`)

fetch(`data/json/23-02-17/${code}.json`)
.then(response => response.json())
  .then(data => {

    data.articles.forEach(article => {*/
//////////////WHY DOES THIS NOT WORK IT'S LITERALLY THE EXACT SAME AS THE WORKING CODE BELOW SCREW YOU JAVASCRIPT/////////////////////////////////
 


///*
const root = document.getElementById("sources");
let code = "us";
let countryName = getCountryFullName(code);

function getCountryFullName(code) {
return countryCodeMap[code.toLowerCase()] || "Unknown";
}

fetch(`data/json/23-02-17/${code}-headlines.json`)
.then(response => response.json())
.then(data => {
    data.articles.forEach(article => {

        //*/

        
        const card = document.createElement("li");
        card.classList.add("card");

        const link = document.createElement("a");
        link.href = article.url;
        link.target = "_blank";
        link.classList.add("source");
        link.setAttribute("id", "source");
        card.appendChild(link);

        const title = document.createElement("p");
        title.classList.add("title");
        title.innerHTML = `${article.title}`;
        link.appendChild(title);

        const sourceAndDate = document.createElement("div");
        sourceAndDate.classList.add("info");

        const source = document.createElement("p");
        source.innerHTML = `Source: ${article.source.name} &nbsp; | &nbsp; ${countryName}`;
        sourceAndDate.appendChild(source);

        const publishedAt = document.createElement("p");
        const date = new Date(article.publishedAt);
        const monthNames = [
            "January",
            "February",
            "March",
            "April",
            "May",
            "June",
            "July",
            "August",
            "September",
            "October",
            "November",
            "December"
        ];
        const formattedDate = `${monthNames[date.getMonth()]} ${date.getDate()}, ${date.getFullYear()}`;
        publishedAt.innerHTML = `Published: ${formattedDate}`;
        sourceAndDate.appendChild(publishedAt);

        link.appendChild(sourceAndDate);

        
        root.appendChild(card);
    });
});