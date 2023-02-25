function isValidSubsequence(array, sequence) {
    let arr = []
      for (let i=0; i<array.length; i++){
        if(arr.length===1){
          break
        }else{
        for (let j=0; j<sequence.length; j++){
          if (array[i] === sequence[j]){
            arr.push(sequence[j])
          }else{
            continue
          }
        }
        }
      } if (arr.length === sequence.length){
        console.log(true)
    }else{
        console.log(false)
      }
  }

  isValidSubsequence([5, 1, 22, 25, 6, -1, 8, 10],[1, 6, -1, 10])