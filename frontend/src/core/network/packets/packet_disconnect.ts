import { game } from "../../..";
import { NETWORK_TYPE } from "../network";
import { Packet } from "../packet";
import { PACKET_ID } from "../packet_types";

interface Data {
  uid: string;
}

export class PacketDisconnect extends Packet {
  private data: Data;

  constructor(data: Data) {
    super(PACKET_ID.DISCONNECT);
    this.data = data;
  }

  public sendBackend(): void {
    game.network.sendToBackend(this, PACKET_ID.DISCONNECT);
  }

  public handleBackend(): void {
    game.network.type = NETWORK_TYPE.SERVER;
  }
}