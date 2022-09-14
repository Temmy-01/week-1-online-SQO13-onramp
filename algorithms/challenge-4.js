function calculateGrade(marks) {
    let result =[]
    for (let i = 0; i < marks.length; i++) {
        result = Number(marks[i]) + Number(result)
        final = result / marks.length
       
    }
    if(final >=70 && final <=79){
            return 'C'
        }
        else if(final <=49 ){
            return 'F'
        }
        else if(final >=50 && final <=59 ){
            return 'E'
        } else if(final >=60 && final <70){
            return 'D'
        }
 }
 console.log(calculateGrade([80, 80, 70]));
 console.log(calculateGrade([19, 5, 42, 2, 77]));
 console.log(calculateGrade([59, 80, 40, 2, 77]));
 console.log(calculateGrade([89, 50, 40, 90, 77]));