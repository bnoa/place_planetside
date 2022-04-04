// ==UserScript==
// @name         Reddit Place - Planetside2
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  There is only war
// @author       Oursblanc
// @match        https://hot-potato.reddit.com/embed*
// @icon         https://styles.redditmedia.com/t5_2s48x/styles/communityIcon_fs7jq60lhag01.png?width=256&s=646912555282b57829363d38a66cc33583c9a0b7
// @grant        none
// ==/UserScript==
if (window.top !== window.self) {
    window.addEventListener('load', () => {
            document.getElementsByTagName("mona-lisa-embed")[0].shadowRoot.children[0].getElementsByTagName("mona-lisa-canvas")[0].shadowRoot.children[0].appendChild(
        (function () {
            const i = document.createElement("img");
            i.src = "https://raw.githubusercontent.com/bnoa/place_planetside/main/overlay.png";
            i.style = "position: absolute;left: 0;top: 0;image-rendering: pixelated;width: 2000px;height: 2000px;";
            console.log(i);
            return i;
        })())
 
    }, false);
 
}
