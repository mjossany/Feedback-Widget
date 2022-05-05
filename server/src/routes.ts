import express from 'express';
import { prisma } from './prisma';
import nodemailer from 'nodemailer';

export const routes = express.Router();

var transport = nodemailer.createTransport({
  host: "smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "420cfd7540a88f",
    pass: "49396eac1657e3"
  }
});

routes.post('/feedbacks', async (req, res) => {
  const { type, comment, screenshot} = req.body;
  
  const feedback = 

  await transport.sendMail({
    from: 'Equipe Feedget <oi@feedget.com>',
    to: 'Jossany Moura <mjossany@gmail.com>',
    subject: 'Novo feedback',
    html: [
      `<div style="font-family: sans-serif; font-size: 16px; color: #111;">`,
      `<p>Tipo do feedback: ${type}</p>`,
      `<p>Comentário: ${comment}</p>`,
      `</div>`
    ].join('\n')
  })

  return res.status(201).json({ data: feedback });
});