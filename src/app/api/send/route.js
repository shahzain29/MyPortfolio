'use server'
import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend('re_T3JwvU8a_FpXde1GsuAjsqW29CuMQcfT9');
const fromEmail = 'shahzain <shahzainfolio.netlify.app>';

export const sendEmail = async (req) => {
  // const { email, subject, message } = req
  // console.log(email, subject, message);
  
  try {
    const data = await resend.emails.send({
      from: fromEmail,
      to: ['shahzainsohail29@gmail.com'],
      subject: 'hello',
      react: (
        <div>
          <h1>hello</h1>
          <p>Thank you for contacting us!</p>
          <p>New message submitted:</p>
        </div>
      ),
    });
    return data;
  } catch (error) {
     return error;
  }
}
