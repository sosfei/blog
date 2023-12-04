import axios from 'axios';

(async function bark() {
    const result = await axios.post(process.env.SEND_URL, {
        "my_token": process.env.SEND_TOKEN,
        "template_id": process.env.SEND_ID,
        "keyword1": "sosfei的blog站",
        "keyword2": "正常",
        "keyword3": "站点的热榜已更新",
        "keyword4": "自动消息"
    }, {
        headers: {
            'Content-Type': 'application/json;charset=UTF-8'
        }
    })
})();
