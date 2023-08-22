var nodemailer = require("nodemailer");

export async function sendMail(email: string, where: string, why: string) {
    console.log(process.env.NODEMAILER_EMAIL, process.env.NODEMAILER_EMAIL)
    try {
        const transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: process.env.NODEMAILER_EMAIL,
                pass: process.env.NODEMAILER_PW,
            },
        });

        const mailOptions = {
            from: process.env.NODEMAILER_EMAIL,
            to: process.env.NODEMAILER_EMAIL,
            subject: `dreverdev contact from - ${email}`,
            text: `email: ${email} - where: ${where} - why: ${why}`,
        };

        await transporter.sendMail(mailOptions);
        console.log("Email Sent");
        return true;
    } catch (error) {
        console.error("Error sending email:", error);
        return false;
    }
}