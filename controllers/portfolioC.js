const nodemailer = require("nodemailer");

module.exports = {
    // Render homepage
    HomePage: (req, res) => {
        res.render("index");
    },
    // Handle contact form submission
    contactus: (req, res) => {
        // Create a transporter for sending emails
        const transporter = nodemailer.createTransport({
            host: "smtp.gmail.com",
            port: 587,
            secure: false,
            requireTLS: true,
            auth: {
                user: "alambinary011@gmail.com",
                pass: "03079957468",
            },
        });

        // Extract data from request body
        let name_ = req.body.name;
        let email_ = req.body.email;
        let subject_ = req.body.subject;
        let message_ = req.body.message;

        // Compose email options with improved HTML structure
        let mailOptions = {
            from: email_, // Sender's email address
            to: "hase271002@gmail.com", // Receiver's email address
            subject: subject_, // Email subject
            html: `
                <div style="font-family: Arial, sans-serif; background-color: #f9f9f9; padding: 20px;">
                    <h2 style="color: #333;">Hello AlamBinary01 Team,</h2>
                    <p style="color: #555;">You have received a new message from ${name_}:</p>
                    <div style="background-color: #fff; border-radius: 5px; padding: 20px; margin-top: 20px;">
                        <p><strong>Name:</strong> ${name_}</p>
                        <p><strong>Email:</strong> ${email_}</p>
                        <p><strong>Subject:</strong> ${subject_}</p>
                        <p><strong>Message:</strong></p>
                        <p>${message_}</p>
                    </div>
                    <p style="color: #555;">Please respond to ${name_} at ${email_}.</p>
                    <p style="color: #555;">Thank you!</p>
                </div>
            `, // Email body with improved HTML structure
        };

        // Send email
        transporter.sendMail(mailOptions, function (error, info) {
            if (error) {
                console.error(error); // Log any errors
                res.status(500).send("Failed to send email"); // Respond with an error status
            } else {
                console.log("Email sent successfully"); // Log success message
                res.render("index"); // Render homepage after successful email sending
            }
        });
    },
};
