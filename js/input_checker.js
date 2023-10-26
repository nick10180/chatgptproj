function safetyCheck(val){
    //window.alert("safetyCHeck Fired!")
    console.debug("Start check");
    const xhtpp = new XMLHttpRequest();
    xhtpp.onreadystatechange = function(){
        
        window.alert("Hello!");
        badwordstring = this.responseText;
    }
            //if bad word return with error/box

            //no bad words call chatgptretriever
    xhtpp.open("GET", "badwordlist.txt");
    xhtpp.send();
    console.debug(badwordstring);
}

function search(pattern, inputtext){
    t = preprocess(currentword);
    skip = 0;
    while(inputtext.length() - skip >= pattern.length){
        if(same(inputtext, pattern, pattern.length()))
            return skip;
        skip += t[inputtext[skip + pattern.length() - 1]];
    }
    return false;
}

function same(str1, str2, len){
    i = len -1
    while (str1[i] = str2[i]){
        if (i =0){
            return true;
        }
        i--;
    }
    return false;
}
function preprocess(inputtext){
    for( i=0; i < 256; i++){
        t[i] = inputtext.length();
    }
    for (i = 0; i < inputtext.length()-1; i++){
        t[inputtext[i]] = inputtext.length() - 1 - i;
    }
    return t;
}
