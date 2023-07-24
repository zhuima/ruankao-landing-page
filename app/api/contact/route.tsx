/*
 * @Author: zhuima zhuima314@gmail.com
 * @Date: 2023-06-06 11:14:43
 * @LastEditors: zhuima zhuima314@gmail.com
 * @LastEditTime: 2023-07-24 11:31:10
 * @FilePath: /ruankao-website/app/api/contact/route.tsx
 * @Description:
 *
 * Copyright (c) 2023 by ${git_name_email}, All Rights Reserved.
 */
import { NextRequest, NextResponse } from "next/server";

import { render } from "@react-email/components";

import { transporter, smtpEmail } from "@/utils/nodemailer";

import { Email } from "@/components/email";

export async function POST(req: NextRequest, res: NextResponse) {
  const body = await req.json();
  const { name, email, message } = body;

  const emailHtml = render(
    <Email name={name} email={email} message={message} />
  );

  const options = {
    from: smtpEmail,
    to: email,
    subject: "New Form Submission",
    html: emailHtml,
  };

  try {
    // Send email using the transporter
    // await transporter.sendMail(options);
    await transporter.sendMail(options, function (error, info) {
      if (error) {
        console.log("send mail error", error);
      } else {
        console.log("Email sent: " + info.response);
        // do something useful
      }
    });
  } catch (error) {
    console.error("Failed to send email:", error);
  }
  return new Response("OK");
}
