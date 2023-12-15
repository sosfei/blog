import axios from 'axios';

(async function bark() {
    const result = await axios.post(process.env.BARK_URL, {
        title: "FEI自由",
        body: "高星热榜已更新",
        url: "https://sosfei.github.io/blog/",
        sound: "shake",
        group: "GitHub",
        icon: "https://cdn.bili33.top/gh/sosfei/figurebed/PicGo/emoji_emoticon.png"
    }, {
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        }
    })
})();