 
    let strValue = "fals";
    let k;
    const truthyValues = ['true', 'yes', '1', 'y'];
    const falsyValues = ['false', 'no', '0', 'n'];

     strValue = strValue.trim().toLowerCase();
    if(truthyValues.includes(strValue)) {
         k = true;}
    if(falsyValues.includes(strValue)) {k =false;} 


console.log(k);