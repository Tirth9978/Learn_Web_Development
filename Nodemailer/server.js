const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
     service: 'gmail',
     auth: {
          user: 'tirthppatel9999@gmail.com',
          pass: 'App Password'
     }
});

const mailOptions = {
     from: 'tirthppatel9999@gmail.com',
     to: 'tirthppatel9978@gmail.com',
     subject: 'Your OTP Code',
     text: `Your OTP is 1234`
};

transporter.sendMail(mailOptions, function (error, info) {
     if (error) {
          console.log(error);
     } else {
          console.log('Email sent: ' + info.response);
     }
});
