import { Controller, Get, Query, Res } from '@nestjs/common';
import { Response } from 'express';
import * as qr from 'qr-image';
@Controller()
export class AppController {
  @Get('qrcode')
  get(@Res() res: Response, @Query('text') text?: string) {
    try {
      const img = qr.image(text, { size: 10 });
      res.writeHead(200, { 'Content-Type': 'image/png' });
      img.pipe(res);
    } catch (e) {
      res.writeHead(414, { 'Content-Type': 'text/html' });
      res.end('<h1>414 Request-URI Too Large</h1>');
    }
  }
}
