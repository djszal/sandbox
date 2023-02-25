function isPangram(string){
    let arr = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
       let nees = string.replaceAll(" ", "").toLowerCase()
       let strArr = nees.split('')
       console.log(strArr)
       let starArr = []
       console.log(arr[1])
       console.log(strArr[9])
     for (let i=0; i<arr.length; i++){
       for (let j=0; j<strArr.length; j++){
         if (arr[i]===strArr[j]){
           starArr.push(arr[i])
           break
       }else{
        continue
       }
     }
    }
    console.log("AAAA", starArr)
  if(starArr.length===arr.length){
    console.log(true) 
  }else{
    console.log(false) 
  }
   }

isPangram("Cwm fjord bank glyphs vext quiz")