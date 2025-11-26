import {
  //ConnectedSocket,
  MessageBody,
  OnGatewayConnection,
  OnGatewayDisconnect,
  SubscribeMessage,
  WebSocketGateway,
  WebSocketServer,
} from '@nestjs/websockets';
import { ChatService } from './chat.service';
import { Server /* Socket */ } from 'socket.io';

@WebSocketGateway({
  cors: {
    origin: '*',
  },
})
export class ChatGateway implements OnGatewayConnection, OnGatewayDisconnect {
  constructor(private readonly chatService: ChatService) {}

  @WebSocketServer()
  private server: Server;

  handleConnection(/*client: Socket*/) {
    console.log('Se contectó el cliente');
  }

  handleDisconnect(/*client: Socket*/): any {
    console.log('Se descontectó el cliente');
  }

  @SubscribeMessage('enviarMensaje')
  onMensajeEnviado(
    @MessageBody() body: string,
    //  @ConnectedSocket() client: Socket,
  ) {
    console.log(body);

    // Guardar el mensaje en la DB.

    // client.broadcast.emit('mensajeRecibido', { mensaje: body });

    this.server.emit('mensajeRecibido', body);
  }

  // this.server.on("enviarMensaje", (data) => {

  // });
}
