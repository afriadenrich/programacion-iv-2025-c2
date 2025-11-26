import { Controller } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';
import { InjectModel } from '@nestjs/mongoose';
import { Log } from './log.schema';
import { Model } from 'mongoose';
import nodemailer from 'nodemailer';

@Controller()
export class AppController {
  constructor(@InjectModel(Log.name) private LogModel: Model<Log>) {}

  @MessagePattern({ cmd: 'sum' })
  accumulate(data: number[]): number {
    return (data || []).reduce((a, b) => a + b);
  }
  @MessagePattern({ cmd: 'test' })
  test(): string {
    return 'Funciona';
  }

  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-call, @typescript-eslint/no-unsafe-member-access
  transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.CORREO!,
      pass: process.env.APP_PASSWORD!,
    },
  });

  @MessagePattern({ cmd: 'send_mail' })
  async send(data: { nombre: string; correo: string }) {
    // ENVIO DE MAIL
    // eslint-disable-next-line @typescript-eslint/no-unsafe-call, @typescript-eslint/no-unsafe-member-access
    await this.transporter.sendMail({
      from: '"Agustín" <agustinfrich2@gmail.com>',
      to: data.correo,
      subject: 'Correo de bienvenida',
      text: 'Bienvenid@ a la app!',
      html: '<strong>Que la pases bien!</strong>',
    });

    // Guardo el log
    await this.LogModel.create({ correo: data.correo });

    return data;
  }
}
