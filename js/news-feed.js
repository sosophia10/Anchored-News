/*Copy of filter-feed/const rootN = document.getElementById("sourcesN");
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


function getCountryFullName(code) {
    return countryCodeMap[code.toLowerCase()] || "Unknown";
}


const dates = ["23-02-17"];// all dates

function fetchAndDisplayData(date) {
for (let i = 0; i < dates.length; i++) {
    const date = dates[i];
    const src = `data/json/${date}`;
    const countryCodes = Object.keys(countryCodeMap);

    for (let j = 0; j < countryCodes.length; j++) {
        const code = countryCodes[j];
        const countryName = getCountryFullName(code);

        fetch(`${src}/${code}.json`)
            .then(response => response.json())
            .then(data => {
                data.articles.forEach(article => {


        const cardN = document.createElement("li");
        cardN.classList.add("cardN");

        const link = document.createElement("a");
        link.href = article.url;
        link.target = "_blank";
        link.classList.add("source");
        link.setAttribute("id", "source");
        cardN.appendChild(link);

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

        
        rootN.appendChild(cardN);
    });
});
}
}
}

// Load the dates from the dates.json file and call fetchAndDisplayData for each date
fetch("data/json/dates.json")
  .then(response => response.json())
  .then(dates => {
    for (let i = 0; i < dates.length; i++) {
      const date = dates[i];
      fetchAndDisplayData(date);
    }
  })
  .catch(error => {
    console.error("Error fetching date list:", error);
  });

function populatesourcesNList(countryCode) {
    const date = "23-02-17"; // You may want to change this to use a dynamic date value based on your use case
    const src = `data/json/${date}`;
    const rootN = document.getElementById("sourcesN");
  
    fetch(`${src}/${countryCode}.json`)
      .then(response => response.json())
      .then(data => {
        // Clear the list before adding new items
        rootN.innerHTML = "";
  
        data.articles.forEach(article => {
          // Create the cardN element and add the article data
          const cardN = document.createElement("li");
          cardN.classList.add("cardN");
  
          const link = document.createElement("a");
          link.href = article.url;
          link.target = "_blank";
          link.classList.add("source");
          link.setAttribute("id", "source");
          cardN.appendChild(link);
  
          const title = document.createElement("p");
          title.classList.add("title");
          title.innerHTML = `${article.title}`;
          link.appendChild(title);
  
          const sourceAndDate = document.createElement("div");
          sourceAndDate.classList.add("info");
  
          const source = document.createElement("p");
          source.innerHTML = `Source: ${article.source.name} &nbsp; | &nbsp; ${getCountryFullName(countryCode)}`;
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
  
          // Add the cardN to the list
          rootN.appendChild(cardN);
        });
      })
      .catch(error => {
        console.error(`Error fetching news data for ${countryCode}`, error);
        // Show an error message on the UI
        rootN.innerHTML = `<li class="error">Error fetching news data for ${countryCode}. Please try again later.</li>`;
      });
  }*/