
class CustomMission{
	constructor(objID,activated,x,y,speak,test){
		this.objID=objID;
		this.activated=activated;
		this.completed=false;
		this.posx=x;
		this.posy=y;
		this.speak=speak;
		this.speakTest=test;
	}
	reset(x,y,activated){
		this.posx=x;
		this.posy=y;
		this.activated=activated;
		this.completed=false;
	}
}


class CustomGame extends BaseGame{
	// Custom variables
	static msgObject1=false;
	static msgPrison=false;
	static msgNote1 = false;
	static msgMultipleInventory=false;
	static missionTurtle=false;
	static turtleOK=false;
	static escape_prison=new CustomMission("barrotes",false, 8,8,false,"fundir");
	// Messages from the objects
	// msg: text message
	// obj: object sending the message
	// par: array with params
	static protocol(msg,obj,par){
		switch(msg){
			case 'dropItem':
				if(
					obj._id=="skull"
					&&
					par[0]==16
					&&
					par[1]==22
				)
				{
					CustomGame.showMessage('missionCompleted');
				}
			
				break;
			case 'takeItem':
				if(
					obj._id=="shot"
				){
					CustomGame.showMessage('missionKill');
				}
				if(
					obj._id=="shot2"
				){
					CustomGame.showMessage('missionKill2');
				}
				if(
					obj._id=="skull"
				){
					CustomGame.remWallXY(6,5);
					CustomGame.remWallXY(7,5);
					CustomGame.showMessage('missionSkull2');
				}
				break;
			case 'touchItem':
				if(
					CustomGame.msgNote1==false
					&&
					par[0]==3
					&&
					par[1]==10
				){
					CustomGame.showMessage('note1')
				}
				break;
			case 'useItem':
				break;
			case 'selectItem':
				break;
			case 'dieObject':
				if(obj._id=="killable"){
					CustomGame.remWallXY(29,5);
					CustomGame.showMessage('missionSkull');
				}
				if(obj._id=="barrotes"){
					CustomGame.remWallXY(9,2);
				}
				break;
			case 'playerPosition':
				if(
					CustomGame.msgNote1==false
					&&
					par[0]==3
					&&
					par[1]==10
				){
					CustomGame.msgPrison=true;
					CustomGame.showMessage('missionPrison');
				}
				/* if(
					CustomGame.msgMultipleInventory==false
					&&
					par[0]==3
					&&
					par[1]==4
				){
					CustomGame.msgMultipleInventory=true
					CustomGame.createBreakableWall("killablewall",3,1,"app/img/wall3.png","mataX");
					CustomGame.addWallXY(3,6,1);
					CustomGame.showMessage('multipleObjects');
				}
				if(
					CustomGame.msgObject1==false
					&&
					par[0]==18
					&&
					par[1]==4
				){
					CustomGame.msgObject1=true;
					CustomGame.showMessage('missionKill1');
				}
				*/
				if(
					CustomGame.escape_prison.completed==false
					&&
					par[0]==8
					&&
					par[1]==8
				)
				{
					CustomGame.escape_prison.activated=true;
					CustomGame.escape_prison.speak=true;
				}
				break; 
			case 'speechToText':
				if(
					CustomGame.escape_prison.speak==true
					&&
					par[0] == CustomGame.escape_prison.speakTest
				){
					CustomGame.showMessage('misionPrisionOK');
					if(CustomGame.remObj(CustomGame.getObject(CustomGame.escape_prison.objID))){
						CustomGame.escape_prison.activated=false;
						CustomGame.escape_prison.completed=true;
						CustomGame.escape_prison.speak=false;
					}else{
						
					}
				}
				break;
		}
	}
}

