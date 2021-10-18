const functions = require("firebase-functions");
const admin = require("firebase-admin");
const nodemailer = require("nodemailer");
const config = functions.config();
const cors = require("cors")({ origin: true })
admin.initializeApp();

const transporter = nodemailer.createTransport(
    { service: "gmail", host: 'smtp.gmail.com', port: 465, secure: true, auth: { user: config.user.email, pass: config.user.password } }
)

let mailOptions = {
    // from: "MyHomepage",
    // to: "jan.karpowicz11@gmail.com",
    // subject: "Message from MyHomepage",
}

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
exports.sendMail = functions.https.onRequest((request, response) => {
    cors(request, response, () => {
        const { name, email, message } = request.query
        mailOptions = {
            from: "MyHomepage",
            to: "jan.karpowicz11@gmail.com",
            subject: "Message from MyHomepage",
            html: `
            <p style="font-size: 16px">From: ${name} </p>
            <p style="font-size: 16px">Email: ${email} </p>
            <p style="font-size: 16px">Message: ${message} </p>
        `
        }
        transporter.sendMail(mailOptions, error => {
            if (error) {
                response.send(error)
            } else {
                response.send("Message sent successfully")
            }
        });
    });
});

