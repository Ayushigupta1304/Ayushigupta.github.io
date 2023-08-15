var names=new Array();
names[0]="ayushi";
names[1]="anju";
names[2]="anjali";
names[3]="shreya";
names[4]="deepak";
names[5]="keeshu";
names[6]="janhavi";
names[7]="soumya";
names[8]="eisha";
names[9]="amrit";


for (var i = 0; i < names.length; i++) {
	if(names[i].charAt(0)==='J'|| names[i].charAt(0)==='j'){
        console.log("Goodbye "+ names[i])
	}
	else{
		console.log("Hello "+ names[i])
	}
}