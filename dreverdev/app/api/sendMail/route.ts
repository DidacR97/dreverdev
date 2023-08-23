import { NextResponse } from 'next/server'
import { EmailTemplate } from "@/components/emailTemplate";
import { Resend } from "resend";
import React from 'react';


const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {

  try {
    const {email, where, why} = await request.json();

    const emailComponent: React.ReactElement = React.createElement(EmailTemplate, {
      email: email,
      where: where,
      why: why
    });

    const data = await resend.emails.send({
      from: 'Contact <onboarding@resend.dev>',
      to: ['didacr97@gmail.com'],
      subject: 'New Contact',
      react: emailComponent,
    });

    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error });
  }
}
