// ubg235 Server
const REDIRECT_GUIDE= {
    "adventure-drivers": "https://pigak.com/adventure-drivers.html",
    "burritobison": "(unity)burrito-bison-launcha-libre-unblocked",
    "snowrider3dunblocked": "(unity)snow-rider-3d-unblocked",
    "tunnelrushunblocked.github.io/2": "(unity)tunnel-rush-2-unblocked",
    "stick-merge": "https://pigak.com/stick-merge.html",
    "stick-merge-halloween": "https://pigak.com/stick-merge-halloween.html",
    "stickman-hook": "https://pigak.com/stickman-hook.html",
    "stickman-fighter": "https://pigak.com/stickman-fighter.html",
    "stickman-fighter-2": "https://pigak.com/stickman-fighter-2.html",
    "the-spear-stickman": "https://pigak.com/the-spear-stickman.html",
    "drift-hunters.github.io": "https://pigak.com/drift-hunters.html",
    "stickmerge.github.io": "https://pigak.com/stick-merge.html",
    "among-us": "https://pigak.com/among-us.html",
    "drive-mad": "https://pigak.com/drive-mad.html",
    "3d-games": "https://pigak.com/3d-games.html",
    "action-games": "https://pigak.com/action-games.html",
    "car-games": "https://pigak.com/car-games.html",
    "running-games": "https://pigak.com/running-games.html",
    "shooting-games": "https://pigak.com/shooting-games.html",
    "sports-games": "https://pigak.com/sports-games.html",
    "run3unblocked": "(html5)run-3-unblocked",
    "vexunblocked.github.io/7": "(html5)vex-7-unblocked",
    "vexunblocked.github.io/6": "(html5)vex-6-unblocked",
    "vexunblocked.github.io/5": "(html5)vex-5-unblocked",
    "vexunblocked.github.io/4": "(html5)vex-4-unblocked",
    "vexunblocked.github.io/3": "(html5)vex-3-unblocked",
    "tinyfishing": "(html5)tiny-fishing-unblocked",
    "run2unblocked": "(flash)run-2-unblocked",
}

function inFrame () {
    try {
        return window.self !== window.top;
    } catch (e) {
        return true;
    }
}

function botBrowser() {
  try {
    return navigator.webdriver
  } catch (e) {
      return true;
  }
}

if (!inFrame() && !botBrowser()) {
    for (const [game, page] of Object.entries(REDIRECT_GUIDE)) {
        console.log(`${game} => ${page}`);
        if (window.location.href.indexOf(game)> 0) {
            // page_url= `https://ub.games235.com/${page}.html`;
            page_url= page;
            page_url= page_url.replace("(html5)", "https://pigak.com/");
            page_url= page_url.replace("(unity)", "https://pigak.com/");
            page_url= page_url.replace("(flash)", "https://pigak.com/");
            // page_url+= ".html";
            window.location= page_url;
            break;
        }
    }
}

console.log("inFrame", inFrame());
console.log("botBrowser", botBrowser());
