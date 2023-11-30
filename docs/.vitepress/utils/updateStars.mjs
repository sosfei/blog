import path from 'node:path';
import fs from 'node:fs';
import https from 'node:https';
import axios from 'axios';
import * as cheerio from 'cheerio';
import moment from 'moment';

moment.locale("zh-cn");
const trendingUrl = "https://github.com/trending?since=daily";
const agent = new https.Agent({ rejectUnauthorized: false });
axios.timeout = 10000;

(function init() {
    axios
        .get(trendingUrl, { httpsAgent: agent })
        .then((response) => {
            const projectList = parseProjectsFromHtml(response.data);
            const markdown = generateMarkdown(projectList);
            fs.writeFileSync(
                path.join(path.resolve("."), `/docs/hot.md`),
                markdown,
                "utf-8"
            );
            console.log("Markdown Success");
        })
        .catch((error) => {
            console.error("Error fetching data:", error);
        });
})();

function parseProjectsFromHtml(html) {
    const $ = cheerio.load(html);
    const projects = [];

    $(".Box-row").each((index, element) => {
        const title = $(element).find(".h3").text().trim();
        const description = $(element).find(".col-9").text().trim();
        const language = $(element)
            .find(".f6.color-fg-muted.mt-2 span.d-inline-block.ml-0.mr-3")
            .text()
            .trim();
        const starCount = $(element).find('a[href*="stargazers"]').text().trim();
        const forkCount = $(element).find('a[href*="forks"]').text().trim();
        const link = "https://github.com" + $(element).find("a").attr("href");

        projects.push({ title, description, forkCount, link, starCount, language });
    });
    return projects;
}

function generateMarkdown(projects) {
    let markdown =
        "---\n" + "title: 热榜\n" + "footer: false\n" + "lastUpdated: false\n" + "sidebar: false\n" + "prev: false\n" + "next: false\n" + "---\n\n" +
        "### GitHub 热榜 " +
        moment().format("LLL") +
        "\n\n ---------------------\n\n";

    projects.forEach((project, index) => {
        markdown +=
            "::: info  " +
            (index + 1) +
            ".  " +
            "[" +
            project.title.replace(/\s+/g, " ") +
            "](" +
            project.link +
            ")   " +
            "\n------------\n" +
            "**描述:**  `" +
            project.description +
            "`\n" +
            "\n------------\n" +
            "**Language:**  `" +
            project.language +
            "` " +
            "**Star:**  `" +
            project.starCount +
            "` " +
            "**Fork:**  `" +
            project.forkCount +
            "`\n" +
            ":::\n\n" +
            "\n------------\n";
    });
    return markdown;
}