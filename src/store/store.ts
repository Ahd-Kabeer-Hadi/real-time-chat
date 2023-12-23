
export type UserId = string;

export interface Chat {
    id: string;
    userId: UserId;
    name: string;
    message: string;
    // createdAt: Date;
    upVotes: UserId[];
}

export abstract class Store {
    constructor() {
        
    }

    initRoom(roomId: string){

    }

    getChats(roomId: string, offset: number, limit: number){
        
    }

    addChat(userId: UserId,name: string, roomId: string, message: string) {
        
    }

    upVote(userId:UserId,room: string, chatId: string){
        
    }
}