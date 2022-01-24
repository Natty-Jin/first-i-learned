const player = {
    name : "natty ",
    weight : 26 ,
    sayHello : function(c, a){
console.log("hello " + c + "my name is " + a );
    },
};

console.log(player);
player.sayHello(player.name, "Jeneon");

const user = {
    name : "seongreol ",
    weight : 77 ,
    good : function(a, b){
console.log("yes it is " + a + b);
    },
};
console.log(user);
user.good(user.name, "lee");

const good = {
    name : 526 , 
    place : "nanyang ",
    sayHi : function(b, c, d){
        console.log("Yes " + b + c + " in front of " + d);
    },
};
console.log(good);
good.sayHi(good.name, " yours", "conveniencestore");

function Say(a, b){
    console.log(a + b);
}
Say("Hi", " joonie");

const user1 = {
    howAreYou : "is not good ",
    saysomething : "well i.... don't know "
};
console.log(user1);
console.log(user1.saysomething);

const days = [1, 2, "hi", "you", "why", "nothing"];
console.log(days[0]);
days.push("month");
console.log(days);
days[2] = "what!!!";
console.log(days[2]);

const good2 = {
    something1 : " i'm so sad... ",
    something2 : " i'm gonna go everywhere.. ",
    something3 : " where is it? ",
    something4 : " i don't know ",
    Sayhi : function(b, a, c ){
        console.log("where are you go?," +  a + b + c);
    },
};

console.log(good2);
good2.something1 = " Hey!";
console.log(good2);
good2.something3 = " yes you!!";
console.log(good2);
good2.Sayhi(good2.something2, " yes?", " So what ");

const topp ={
    name : "serong",
    sayYo : function(mom){
        console.log(mom)
    }
}