// @ts-ignore
import nodemailer from "nodemailer";

export const emailAdapter = {
    async sendEmail(email: string, subject: string, message: string) {
        const transporter = nodemailer.createTransport({
            service: "gmail",
            secure: false,
            auth: {
                user: 'spacex09876@gmail.com', // generated ethereal user
                pass: 'bzsaejxpsmhdqzur', // generated ethereal password Free12345
            }
        });
        const info = await transporter.sendMail({
            from: 'spacex09876@gmail.com', // sender address
            to: email, // list of receivers
            subject, // Subject line
            html: message // html body
        });
        return info.envelope
    }
}