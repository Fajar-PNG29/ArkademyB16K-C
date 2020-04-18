const createMstrix = (par) =>{
  	let d1 = 0
  	let d2 = 0
    let sum
	let matrix = [];
    for(let i = 0;i<par;i++){
        matrix[i]=[];
        for(let j=0;j<par;j++){
            let number = Math.floor(Math.random() * 98)+1
            matrix[i][j]= number
          
          	if (i == j) {
				d1+=matrix[i][j]
			}
          	if (par-i == j){
                d2+=matrix[i][j]
                }
			
        }
    }
  sum = d1+d2
  console.log(matrix)
  console.log("Total = "+sum)
  	
}
createMstrix(3)
