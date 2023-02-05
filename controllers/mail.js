const nodeMailer = require("nodemailer");

process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";

const sendMail = async (req, res) => {
  const { body } = req;

  const transporter = nodeMailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
      user: "onukwilip@gmail.com",
      pass: process.env.SMTP_APP_PASSWORD,
    },
  });

  const mailOptions = {
    from: "onukwilip@gmail.com",
    to: body.to,
    subject: body.subject,
    text: "",
    html: body.html,
  };

  const sent = await transporter.sendMail(mailOptions).catch((e) => {
    console.log(e?.message);
    return res.status(400).json({ message: "An error occured" });
  });

  if (!sent) return res.status(400).json({ message: "An error occured" });

  return res.status(200).json({ message: "Mail sent successfully!" });
};

module.exports = sendMail;
