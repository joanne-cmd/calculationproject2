//a function that takes the gross pay  and calculates the nhif deduction
function findDeduction(grossPay){
        if (grossPay<6000){
            return 150;
        }
            
        else if (grossPay<8000){
            return 300;
        }
            
        else if (grossPay<12000){
            return 400;
        }
            
        else if (grossPay<15000){
            return 500;
        }
            
        else if (grossPay<20000){
            return 600;
        }
            
        else if (grossPay<25000){
            return 750;
        }
            
        else if (grossPay<30000){
            return 850;
        }
           
        else if  (grossPay<35000){
            return 900;
        }
            
        else if (grossPay<40000){
            return 950;
        }
            
        else if  (grossPay<45000){
            return 1000;
        }
            
        else if (grossPay<50000){
            return 1100;
        }
           
        else if (grossPay<60000){
            return 1200;
        }
            
        else if  (grossPay<70000){
            return 1300;
        }
            
        else if (grossPay<80000){
            return 1400;
        }
            
        else if (grossPay<90000){
            return 1500;
        }
           
        else if  (grossPay<100000){
            return 1600;
        }
            
        else{
            return 1700;
        }
            
    }

//a function that calculate the social security funds(nssf)
function securityFunds(pensionablePay){
    return (pensionablePay*0.06)
}
//calculating taxable income
function taxableIncome(grossPay,...deduction){
    for(let d of deduction){
        grossPay-=d
    }
    return grossPay
}
// afunction that calculate payee 
function findPayee(taxableIcome) {
    switch(taxableIcome){
        case(taxableIcome<=24000):
            return taxableIcome*0.1;
        case(taxableIcome<=32,333):
            return taxableIcome*0.25;
        default:
            return taxableIcome*0.3;
    }
    
}
function totalGrossPay(...payvalues){
    let sum = 0;
    for(let pay of payvalues){
        sum+=pay
    }
    return sum
}


function changeOnSpot(event){
    let BASIC = document.getElementById("basic").value;
    let basic = Boolean(BASIC) ? parseFloat(BASIC) : 0;
    let allowance= Array.from(document.querySelectorAll(".allowance1")).map(element => Boolean(element.value) ? parseFloat(element.value) : 0)

    let grossPay = totalGrossPay(basic, ...allowance)

    let nhif = findDeduction(grossPay)
    let nssf = securityFunds(grossPay)
    let taxable = taxableIncome(grossPay, nhif, nssf)
    let payee = findPayee(taxable)

    let netSalary = (taxable - payee) - nhif - nssf

    document.getElementById("nhif").textContent= nhif
    document.getElementById("nssf").textContent= nssf
    document.getElementById("Payee").textContent=payee
    document.getElementById("netsalary").textContent=netSalary

}
