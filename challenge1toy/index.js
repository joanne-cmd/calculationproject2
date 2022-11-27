//this function will take  students arguments(marks)and grades them
function  studentsGrades(marks){
    console.log(marks)
        if (marks<40){
            return "E";
        }
            
        else if (marks<50){
            return "D";
        }
            
        else if (marks<60){
            return "C";
        }
            
        else if (marks>80){
            return "B";
        }
            
        else{
            return "A"
        }
            
    }

function handleClick(event){
    let marks=parseInt(document.getElementById("marks").value)
    let grade = studentsGrades(marks);
    document.getElementById("out").textContent=grade
}