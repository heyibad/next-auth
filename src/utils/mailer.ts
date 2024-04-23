import nodemailer from 'nodemailer';

interface mailerProps{
    email:string,
    emailType:string,
    userID:string
}

const mailer=async({email,emailType,userID}:mailerProps) =>{
try {
  
      const transporter = nodemailer.createTransport({
          host: "smtp.ethereal.email",
          port: 587,
          secure: false, // Use `true` for port 465, `false` for all other ports
          auth: {
            user: "maddison53@ethereal.email",
            pass: "jn7jnAPss4f63QBp6D",
          },
        });
        const mailOptions = {
          from: 'ibad3572@gmail.com', // sender address
          to: email, // list of receivers
          subject: emailType === "VERIFY" ? "VERIFICATION":"FORGOT PASSWORD", // Subject line
          html: "<b>Hello world?</b>", // html body
        }
        const mailResponse = await transporter.sendMail(mailOptions);
        return mailResponse
  
} catch (error: any) {
  throw new Error(`Something happends while Sending Email: ${error.message}`)
}
} 