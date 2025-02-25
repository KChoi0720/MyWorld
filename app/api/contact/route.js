"use server"; // ✅ enforce Next.js to execute in Node.js environment


import nodemailer from "nodemailer";

export async function POST(req) {
  try {
    const body = await req.json();
    console.log("Received form data:", body); // print to confirm the data is correct

    const { name, email, message } = body;
    
    if (!name || !email || !message) {
      console.error("Missing form fields");
      return new Response(JSON.stringify({ message: "Missing fields" }), { status: 400 });
    }

    console.log("Connecting to mail server...");

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER, // ✅ Gmail account
        pass: process.env.EMAIL_PASS, // ✅ Gmail app password, generated in Google Account
      },
    });

    console.log("Sending email...");

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: "choicanlight@gmail.com", // you Email
      subject: `New Contact Form Submission from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
    };

    await transporter.sendMail(mailOptions);

    console.log("Email sent successfully!");
    
    return new Response(JSON.stringify({ message: "Email sent successfully!" }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });

  } catch (error) {
    console.error("Email sending error:", error);
    
    return new Response(JSON.stringify({ message: "Email sending failed", error: error.message }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}
