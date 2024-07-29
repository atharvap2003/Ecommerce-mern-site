require('dotenv').config();
const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: 'pandharikaratharva@gmail.com', 
    pass: 'xfbl jepm uwox mbhs',
  },
});

const sendWelcomeEmail = (email, username) => {
  const mailOptions = {
    from: 'pandharikaratharva@gmail.com', 
    to: email,
    subject: "Welcome to Shop",
    text: `Hello ${username}, \n\n<b>Welcome to Ecommerce platform! We're glad to have you with us.</b>Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, qui temporibus incidunt neque reiciendis minus laborum doloremque cum impedit, ea, iusto quaerat odio dolor esse. Veritatis, sequi cum. Libero quisquam saepe at ipsum accusamus? Consectetur, libero! Aperiam, doloremque repellat dolore maxime, dolorum explicabo qui temporibus inventore officiis tempora exercitationem, dignissimos rem similique voluptas expedita magnam? Culpa cupiditate suscipit minima corrupti sint dicta, quo, dignissimos quisquam vel consequatur illum, exercitationem debitis quam similique placeat. Sed ullam mollitia labore placeat nihil aliquam expedita, tempore ratione consequuntur temporibus exercitationem nulla, a, consequatur omnis consectetur perspiciatis velit ut? Eius quisquam omnis saepe itaque corporis.\nBest regards,\nMyShop Team`,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return console.log(error);
    }
    console.log('Email sent: ' + info.response);
  });
};

module.exports = sendWelcomeEmail;
