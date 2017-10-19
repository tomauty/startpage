const IMAGE_COUNT = 10;

const links = {
    "work": {
        "jira": "https://moneylion.atlassian.net",
        "confluence": "https://moneylion.atlassian.net/wiki",
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
    },
    "news": {
        "tricycle": "https://tricycle.org",
        "hacker news": "https://news.ycombinator.com",
    },
    "friends": {
        "facebook": "https://facebook.com",
        "twitter": "https://twitter.com",
        "hipinion": "https://forums.hipinion.com",
    },
};

function init() {

    // good morning
    const hour = new Date().getHours();
    let hourString = 'morning';
    if (hour > 12 && hour < 18) { hourString = 'afternoon'; }
    if (hour > 18) { hourString = 'evening'; }
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
        section = document.createElement('h2');
        section.innerHTML = sectionName;
        linkList.appendChild(section);

        Object.keys(links[sectionName]).forEach(linkName => {
            "use strict";
            const link = document.createElement('a');
            link.setAttribute('href', links[sectionName][linkName]);
            // link.setAttribute('target', '_blank');
            link.innerHTML = linkName;
            linkList.appendChild(link);
        });
    });

}

setTimeout(init, 1);

