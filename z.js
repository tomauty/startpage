const IMAGE_COUNT = 10;

const links = {
    "work": {
        "jira": "https://moneylion.atlassian.net",
        "confluence": "https://moneylion.atlassian.net/wiki",
        "bamboo": "https://bamboo.moneylion.com",
        "stash": "https://stash.moneylion.com",
        "invision": "https://moneylion.invisionapp.com",
        "bugsnag": "https://bugsnag.com",
        "fabric": "https://fabric.io",
        "github": "https://github.com",
        "itunes connect": "https://itunesconnect.apple.com",
    },
    "$": {
        "google finance": "https://finance.google.com",
        "schwab": "https://schwab.com",
        "ynab": "https://app.youneedabudget.com",
    },
    "news": {
        "tricycle": "https://tricycle.org",
	"cabinet": "http://www.cabinetmagazine.org",
	"hackernoon": "https://hackernoon.com",
        "hacker news": "https://news.ycombinator.com",
    },
    "friends": {
        "facebook": "https://facebook.com",
        "twitter": "https://twitter.com",
        "hipinion": "http://forums.hipinion.com",
    },
};

function googleSearch(form) {
    const searchText = encodeURIComponent(document.getElementById('search').value);
    console.log(searchText);
    window.open('https://www.google.com/search?q=' + searchText, '_self', false);
}

function init() {

    // good morning
    const hour = new Date().getHours();
    let hourString = 'morning';
    if (hour >= 12 && hour < 18) { hourString = 'afternoon'; }
    if (hour >= 18) { hourString = 'evening'; }
    document.getElementById("hourText").textContent = 'good ' + hourString;

    // what are you seeing
    const image = document.getElementById('look');
    const imageIndex = Math.ceil(Math.random() * IMAGE_COUNT);
    const src = 'mages/' + imageIndex + '.png';
    image.setAttribute('src', src);

    // where are you going
    const linkList = document.getElementById("links");
    let section;
    Object.keys(links).forEach(sectionName => {

        const sectionContainer = document.createElement('div');
        sectionContainer.setAttribute('style', 'display: flex; flex-direction: column; margin-right: 50px;');

        linkList.appendChild(sectionContainer);

        section = document.createElement('h2');
        section.innerHTML = sectionName;
        sectionContainer.appendChild(section);

        Object.keys(links[sectionName]).forEach(linkName => {
            "use strict";
            const link = document.createElement('a');
            link.setAttribute('href', links[sectionName][linkName]);
            // link.setAttribute('target', '_blank');
            link.innerHTML = linkName;
            sectionContainer.appendChild(link);
        });
    });

}

setTimeout(init, 1);

