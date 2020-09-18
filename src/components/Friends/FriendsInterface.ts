export interface IFriendsArr {
	firstName: string,
	lastName: string,
	profesion: string,
	avatarka: string,	
	id: number,
}
export interface ISingleFriendProps{
	firstname:string,
	lastname:string,
	profesion:string,
	avatarka:string,
	id:number,
	deleteButtonHandler(event: React.MouseEvent,id:number):void
	messegeButtonHandler(event: React.MouseEvent,id:number):void
 }