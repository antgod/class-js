var book = {
    "title"  : {
        type: 'text',
        text: 'title'
    },
    "authors": {
        type:'select',
        text:'1,2,3'
    },
    edition  : {
        type:'text',
        text:'edition'
    },
    year     : {
        type:'select',
        text:'2000,2001,2002'
    }
};
var jsonText1 = JSON.stringify(book, ["title", "edition"]);

var book = {
    "title": "Professional JavaScript",
    "authors": [
        "Nicholas C. Zakas"
    ],
    edition: 3,
    year: 2011
};
var jsonText2 = JSON.stringify(book, function(key, value){
    switch(key){
        case "authors":
            return value.join(",")
        case "year":
            return 5000;
        case "edition":
            return undefined;
        default:
            return value;
    }
});

console.log(jsonText1,jsonText2);