function XO(str) {
    let ex =[] 
    let oh =[]
    let lower = str.toLowerCase()
    console.log(lower)
    let arr = lower.split('')
    for (let i =0 ; i<arr.length; i++){
      if (arr[i]==='x'){
        ex.push(arr[i])
      }else if (arr[i]==='o'){
        oh.push(arr[i])
      }else{
        continue
      }
    }
    console.log(ex)
    console.log(oh)
    if (ex.length === oh.length && (ex.length !== 0 || oh.length!==0)){
      console.log(true) 
    }else{
      console.log(false)
    }
      
  }
  
  XO('ooxXm')