//Javascript code for task 1
        var firstnumber;  
        var secondnumber;  
        var result;  
        var operations;  
  
       function one() {  
            if (document.calculator.txts.value == "0" || document.calculator.txts.value == result) {  
  
                document.calculator.txts.value = "1";  
  
            } else  
            {  
                documentdocument.calculator.txts.value = document.calculator.txts.value + "1";  
            }  
           return 1;
        }  
  
        function two() {  
  
            if (document.calculator.txts.value == "0" || document.calculator.txts.value == result) {  
  
                document.calculator.txts.value = "2";  
  
            } else     
            {  
                documentdocument.calculator.txts.value = document.calculator.txts.value + "2";  
            }  
           return 2;
        }  
  
        function three() {  
  
            if (document.calculator.txts.value == "0" || document.calculator.txts.value == result) {  
  
                document.calculator.txts.value = "3";  
  
            } else  
            {  
                documentdocument.calculator.txts.value = document.calculator.txts.value + "3";  
            }  
          return 3;
        }  
  
        function four() {  
  
            if (document.calculator.txts.value == "0" || document.calculator.txts.value == result) {  
  
                document.calculator.txts.value = "4";  
  
            } else   
            {  
                documentdocument.calculator.txts.value = document.calculator.txts.value + "4";  
            }  
          return 4;
        }  
  
        function five() {  
  
            if (document.calculator.txts.value == "0" || document.calculator.txts.value == result) {  
  
                document.calculator.txts.value = "5";  
  
            } else   
            {  
                documentdocument.calculator.txts.value = document.calculator.txts.value + "5";  
            }  
           return 5;
        }  
  
        function six() {  
  
            if (document.calculator.txts.value == "0" || document.calculator.txts.value == result) {  
  
                document.calculator.txts.value = "6";  
  
            } else     
            {  
                documentdocument.calculator.txts.value = document.calculator.txts.value + "6";  
            }  
            return 6;
  
        }  
  
        function seven() {  
  
            if (document.calculator.txts.value == "0" || document.calculator.txts.value == result) {  
  
                document.calculator.txts.value = "7";  
  
            } else   
            {  
                documentdocument.calculator.txts.value = document.calculator.txts.value + "7";  
            } 
            return 7; 
        }  
  
        function eight() {  
  
            if (document.calculator.txts.value == "0") {  
  
                document.calculator.txts.value = "8";  
  
            } else if (document.calculator.txts.value == result) {  
                document.calculator.txts.value = "8";  
            } else  
            {  
                documentdocument.calculator.txts.value = document.calculator.txts.value + "8";  
            }  
          return 8;
        }  
  
        function nine() {  
  
            if (document.calculator.txts.value == "0" || document.calculator.txts.value == result) {  
  
                document.calculator.txts.value = "9";  
  
            } else   
            {  
                documentdocument.calculator.txts.value = document.calculator.txts.value + "9";  
            }  
           return 9;
        }  
  
        function zero() {  
  
            if (document.calculator.txts.value == "0") {  
  
                document.calculator.txts.value = "0";  
  
            } else if (document.calculator.txts.value == result) {  
                document.calculator.txts.value = "0";  
            } else   
            {  
                documentdocument.calculator.txts.value = document.calculator.txts.value + "0";  
            }  
           return 0;
        }  
  
        function dobuzero() {  
  
            if (document.calculator.txts.value == "0" || document.calculator.txts.value == result) {  
  
                return;  
  
            } else  
            {  
                documentdocument.calculator.txts.value = document.calculator.txts.value + "00";  
            }  
          return 00;
        }  
  
        function clr() {  
            document.calculator.txts.value = "0";  
            document.calculator.txtsu.value = "";  
            return;  
        }  
  
        function plus() {  
  
            operation = "+";  
            firstnumber = parseInt(document.calculator.txts.value);  
            document.calculator.txts.value = "0";  
            document.calculator.txtsu.value = firstnumber + operation;  
            return;  
  
        }  
  
        function mul() {  
  
            operation = "*";  
            firstnumber = parseInt(document.calculator.txts.value);  
            document.calculator.txts.value = "0";  
            document.calculator.txtsu.value = firstnumber + operation;  
           return;
        }  
  
        function minus() {  
  
            operation = "-";  
            firstnumber = parseInt(document.calculator.txts.value);  
            document.calculator.txts.value = "0";  
            document.calculator.txtsu.value = firstnumber + operation;  
           return ;
        }  
  
        function div() {  
  
            operation = "/";  
            firstnumber = parseInt(document.calculator.txts.value);  
            document.calculator.txts.value = "0";  
            document.calculator.txtsu.value = firstnumber + operation;  
          return;
        }  
  
        function perc() {  
  
            operation = "%";  
            firstnumber = parseInt(document.calculator.txts.value);  
            document.calculator.txts.value = "0";  
            document.calculator.txtsu.value = firstnumber + operation;  
         return ;
        }  
  
        function equalsto() {  
  
            secondnumber = parseInt(document.calculator.txts.value);  
  
            if (operation == "+") {  
                result = firstnumber + secondnumber;  
            } else if (operation == "*") {  
  
                result = firstnumber * secondnumber;  
  
            } else if (operation == "-") {  
  
                result = firstnumber - secondnumber;  
  
            } else if (operation == "/") {  
  
                result = firstnumber / secondnumber;  
  
            } else if (operation == "%") {  
  
                if (document.calculator.txts.value == "0") {  
  
                    result = firstnumber / 100;  
                    document.calculator.txtsu.value = firstnumber + operation + "100";  
                } else if (document.calculator.txts.value != "0") {  
                    result = firstnumber * secondnumber / 100;  
                    document.calculator.txtsu.value = firstnumber + operation + secondnumber + "*100 = " + result;  
                }  
            } else if (operation == "^") {  
  
                for (var i = 0; i < secondnumber; i++) {  
  
                    result = firstnumber * i;  
                }  
  
  
            }  
            document.calculator.txts.value = "";  
            document.calculator.txts.value = result.toString();  
            document.calculator.txtsu.value = firstnumber + operation + secondnumber + " = " + result.toString();  
            return;  
  
        }  
  
        function sqrots() {  
            firstnumber = document.calculator.txts.value;  
            result = Math.sqrt(parseInt(document.calculator.txts.value));  
            document.calculator.txts.value = result;  
            document.calculator.txtsu.value = "sqrt(" + firstnumber + ") = " + result;  
            return result;
  
        }  
  
        function abs() {  
            firstnumber = document.calculator.txts.value;  
            result = Math.abs(parseInt(document.calculator.txts.value));  
            document.calculator.txts.value = result;  
            document.calculator.txtsu.value = "abs(" + firstnumber + ") = " + result;  
            return result;
  
        }  


//javascript code for task2

        function formValidation()
         {
            var uname=document.form.name;
            var uphn=document.form.phone;
            var umail=document.form.email;
            if(allLetter(uname))
            {
               if(phonenumber(uphn))
               {
                  if(email(umail))
                  {
                  return true;
                  }
               }
            }
            return false;
         }
         function allLetter(inputtxt)
         { 
           var letters = /^[a-zA-Z\s-, ]+$/
           if(inputtxt.value.match(letters))
           {
            return true;
            }
           else
            {
               alert('Please input alphabet characters only');
               return false;
             }
             return true;
           }
           function phonenumber(inputtxt)
           {
            var phoneno = /^\d{10}$/;
            if((inputtxt.value.match(phoneno)))
            {
              return true;
            }
           else
           {
            alert('Enter a valid phone number consisting of only 10 numbers');
           return false;
           }
           return true;
         }
         function email(inputtxt)
         {
             var email=/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
             if(inputtxt.value.match(email))
             {
                 return true;
             }
             else{
                 alert('Enter a valid email address!!')
             }
             return true;
         }



//javascript code for task3




function palindrome()
{
    var string=document.getElementById("word").value;
    var i,rstr="";
    for(i=string.length-1;i>=0;i--)
    {
        rstr+=string[i];
    }
    var n=rstr.localeCompare(string);
    if(n==0){
        alert("It is a Palindrome!!");
        return true;
    }
    else{
        alert("Not a Palindrome!!");
        return false;
    }
}
function anagram()
{
    var string1=document.getElementById("word1").value;
    var string2=document.getElementById("word2").value;
    string1 = string1.replace(/[^\w]/g, '').toLowerCase();
    string2 = string2.replace(/[^\w]/g, '').toLowerCase();
    var i;
    var count=0;
    var n1=string1.length;
    var n2=string2.length;
    if(n1==n2)
    {
       for(i=0;i<n1;i++)
       {
           for(var j=0;j<n1;j++)
           {
               if(string1[i]==string2[j])
               {
                   count=count+1;
                   break;
               }
           }
       } 
       if(count==n1)
       {
           alert("It is anagram");
           return true;
       }
       else{
           alert("It's not a anagram!!.Try another one!!");
           return false;
        }
    }
   else{
       alert("It's not a Anagram!!.Try another one!!");
       return false;
   }
}




//javascript code for task4..


function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
  }
  function game(){ 
     var img1;
      var img2;
      var str1;
      var str2;
  var num1=getRndInteger(0,1000);
  var num2=getRndInteger(0,1000);
  document.write("<br><br><br>First number of contestant is ="+num1);
  document.write("<br>");
  document.write("Second number of contestant is ="+num2);
  document.write("<br>");
  var t1=num1%10;
  var t2=num2%10;
  if(t1==0||t1==1||t1==2||t1==3)
  {
      img1=0;
      str1="cockroach";
  }
  else if(t1==4||t1==5||t1==6){
     img1=1;
     str1="human";
  }
  else{
      img1=2;
      str1="nuclear bomb";
  }
  if(t2==0||t2==1||t2==2||t2==3)
  {
      img2=0;
      str2="cockroach";
  }
  else if(t2==4||t2==5||t2==6){
     img2=1;
     str2="human";
  }
  else{
      img2=2;
      str2="nuclear bomb"
  }
  document.write("<br>");
  document.write("It's a War Between: "+str1+" and "+str2);
  document.write("<br>");
  document.write("<br>");
  if(img1==img2)
  {
      document.write("It's a TIE!!");
  }
  else if((str1=="human" &&str2=="cockroach")||(str1=="cockroach" && str2=="human"))
  {
      document.write("Human Wins!!");
  }
  else if((str1=="cockroach"&&str2=="nuclear bomb")||(str1=="nuclear bomb"&&str2=="cockroach"))
  {
      document.write("Cockroach Wins!!");
  }
  else{
      document.write("Human Dies!!");
  }
  document.write("<br>");
  document.write("<br>");
  document.write("<br><br><br>refresh to go back..........");
  }
