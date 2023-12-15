import nodemailer from 'nodemailer';
import fs from 'node:fs';
import path from 'node:path';

const __dirname = path.resolve();
const mailTransport = nodemailer.createTransport({
    host: process.env.SMTP_SERVER,
    port: 587,
    pool: true,
    secureConnection: true,
    auth: {
        user: process.env.SMTP_SEND_FROM,
        pass: process.env.SMTP_PASSWORD,
    },
});

mailTransport.sendMail({
    from: process.env.SMTP_SEND_FROM,
    to: process.env.SMTP_SEND_TO,
    subject: "[IFEEI/blog]站点热榜更新",
    html: fs.createReadStream(path.join(__dirname, `/docs/.vitepress/email.html`)),
}).then(res => {
    mailTransport.close();
});