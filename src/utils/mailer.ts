import { User } from '@/models/user.model';
import nodemailer from 'nodemailer';
import bcryptjs from 'bcryptjs';

interface mailerProps{
    email:string,
    emailType:string,
    userID:string
}

export const mailer=async({email,emailType,userID}:mailerProps) =>{
try {
  const TOKEN = await bcryptjs.hash(userID.toString(),10)
  if (emailType === "VERIFY") {
    const user= await User.findByIdAndUpdate(userID,{verificationToken:TOKEN,verificationTokenExpiry:Date.now()+3600000})
  }
  else if (emailType === "FORGOT") {
    const user= await User.findByIdAndUpdate(userID,
      {forgotPasswordToken:TOKEN,forgotPasswordTokenExpiry:Date.now()+3600000}
    )
  }
      const transporter = nodemailer.createTransport({
        host: "sandbox.smtp.mailtrap.io",
        port: 2525,
        auth: {
          user: process.env.MAIL_USER,
          pass: process.env.MAIL_PASS
        }
      
        });
        const mailOptions = {
          from: 'ibad3572@gmail.com', // sender address
          to: email, // list of receivers
          subject: emailType === "VERIFY" ? "VERIFICATION":"FORGOT PASSWORD", // Subject line
          html: `
          <p>
           <a href='${process.env.DOMAIN}/api/user/${emailType=="VERIFY"?"verify":"forgot"}?token=${TOKEN}' target='_blank'>Click Here </a> to
            ${emailType=="VERIFY"?"verify your email":"reset your password"} 
           </p>`, 
         
          // html body
        }
        const mailResponse = await transporter.sendMail(mailOptions);
        return mailResponse
  
} catch (error: any) {
  throw new Error(`Something happends while Sending Email: ${error.message}`)
}
} 