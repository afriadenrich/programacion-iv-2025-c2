import {Controller, Get, MaxFileSizeValidator, ParseFilePipe, Post, UploadedFile, UploadedFiles, UseInterceptors,} from '@nestjs/common';
import { AppService } from './app.service';
import { FileFieldsInterceptor, FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Post("upload")
  @UseInterceptors(FileInterceptor("foto",{
    storage:diskStorage({

      destination(req, file, callback) {
        callback(null,"public/images")
      },

      filename(req, file, callback) {
        
        const nuevoNombre = `${Date.now()}-${file.originalname}`

        callback(null,nuevoNombre)
      },
    })
  }))
  subirArchivo(@UploadedFile(new ParseFilePipe({
    fileIsRequired:true,
    validators:[
      new MaxFileSizeValidator({maxSize:13000})
    ]
  })) file:Express.Multer.File){
    console.log("nombre final: "+ file.filename)
    console.log("Tamñao: "+file.size)
    console.log("nombre original: "+file.originalname)
  }

  @Post("uploadFiles")
  @UseInterceptors(FileFieldsInterceptor([
    {name:"avatar"},
    {name:"background"}
  ]))
  subirArchivos(@UploadedFiles() files: {avatar?:Express.Multer.File[],background?:Express.Multer.File[]}){

    console.log(files)
  }
}
