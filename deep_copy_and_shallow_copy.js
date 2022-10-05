let obj = {
    name : 'anish',
};

let user = obj;  // it's copy by refrence not copy by value , user and obj pointing on smae location.

user.name = 'Manish';

console.log("Printong with Console log");
console.log(obj);
console.log("Printong with Console wan");
console.warn(obj);
console.log("Printong with Console table");
console.table(obj);

console.log("Printong with Console error");
console.error(obj);

// copy by value (only variable not object)

let x = 'anil';
let y = x;
y = 'Kumar';

console.log(y); // it print kumar , because it copy by value


// Shallow copy

let ShallowObj = {
    name : 'anish',
};

let user = Object.assign({},ShallowObj);
user.name = "Manish";

console.warn(" objetc is  " ,ShallowObj);
console.warn(" user is  " ,user);



let ShallowObj1 = {
    name : 'anish',
};

let user = {...ShallowObj1}; // By using destruct operate you also copy the object and in this cas object is copy by value
user.name = "Manish";

console.warn(" objetc is  " ,ShallowObj1);
console.warn(" user is  " ,user);

/*

let deepObj = {
    name : 'anish',
    address : {
        city : 'pune',
        state : 'Maharastra'
    }
};

let user = {...deepObj};
user.name = "Manish";

console.warn(" objetc is  " ,deepObj);
console.warn(" user is  " ,user);



let deepObj1 = {
    name : 'anish',
    address : {
        city : 'pune',
        state : 'Maharastra'
    }
};

let user = JSON.parse(JSON.stringify(deepObj1));
user.name = "Manish";

console.warn(" objetc is  " ,deepObj1);
console.warn(" user is  " ,user);



let deepObjwithfun = {
    name : 'anish',
    address : {
        city : 'pune',
        state : 'Maharastra'
    },
    getdata: function(){
        return 'Exit';
    }
};

let user = JSON.parse(JSON.stringify(deepObjwithfun));
user.name = "Manish";

console.warn(" objetc is  " ,deepObjwithfun);
console.warn(" user is  " ,user);

*/