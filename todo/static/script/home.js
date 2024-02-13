const element = document.getElementById("devdiv");
function myFunction() {
   devinterval = setInterval(function() {
        if (element.innerHTML === "developer...!") {
            element.innerHTML = '';
            clearInterval(devinterval);
            console.log('if');
            freelancer();

        } else {
            if(element.innerHTML == "developer...")
            {
            element.innerHTML += "!";
            }
            else if(element.innerHTML == "developer..")
            {
            element.innerHTML += ".";
            }
            else if(element.innerHTML == "developer.")
            {
            element.innerHTML += ".";
            }
            else if(element.innerHTML == "developer")
            {
            element.innerHTML += ".";
            }
            else if(element.innerHTML == "develope")
            {
            element.innerHTML += "r";
            }
            else if(element.innerHTML == "develop")
            {
            element.innerHTML += "e";
            }
            else if(element.innerHTML == "develo")
            {
            element.innerHTML += "p";
            }
            else if(element.innerHTML == "devel")
            {
                element.innerHTML += "o";
            }
            else if(element.innerHTML == "deve")
            {
                element.innerHTML += "l";
            }
            else if(element.innerHTML == "dev")
            {
                element.innerHTML += "e";
            }
            else if(element.innerHTML == "de")
            {
                element.innerHTML += "v";
            }
            else if(element.innerHTML == "d")
            {
                element.innerHTML += "e";
            }
            else{
                element.innerHTML += "d";
            }
        }
    }, 300);
  }
  function freelancer(){
    devinterval = setInterval(function() {
        if (element.innerHTML === "freelancer...!") {
            element.innerHTML = '';
            clearInterval(devinterval);
            Student();

        } 
            else {
                if(element.innerHTML == "freelancer...")
            {
            element.innerHTML += "!";
            }
            else if(element.innerHTML == "freelancer..")
            {
            element.innerHTML += ".";
            }
            else if(element.innerHTML == "freelancer.")
            {
            element.innerHTML += ".";
            }
            else if(element.innerHTML == "freelancer")
            {
            element.innerHTML += ".";
            }
               else if(element.innerHTML == "freelance")
                {
                element.innerHTML += "r";
                }
                else if(element.innerHTML == "freelanc")
                {
                element.innerHTML += "e";
                }
                else if(element.innerHTML == "freelan")
                {
                element.innerHTML += "c";
                }
                else if(element.innerHTML == "freela")
                {
                element.innerHTML += "n";
                }
                else if(element.innerHTML == "freel")
                {
                    element.innerHTML += "a";
                }
                else if(element.innerHTML == "free")
                {
                    element.innerHTML += "l";
                }
                else if(element.innerHTML == "fre")
                {
                    element.innerHTML += "e";
                }
                else if(element.innerHTML == "fr")
                {
                    element.innerHTML += "e";
                }
                else if(element.innerHTML == "f")
                {
                    element.innerHTML += "r";
                }
                else{
                    element.innerHTML += "f";
                }
            }

    }, 300);
  }
  function Student(){
    devinterval = setInterval(function() {
        if (element.innerHTML === "student...!") {
            element.innerHTML = '';
            clearInterval(devinterval);
            myFunction();
        } else {
            if(element.innerHTML == "student...")
            {
            element.innerHTML += "!";
            }
            else if(element.innerHTML == "student..")
            {
            element.innerHTML += ".";
            }
            else if(element.innerHTML == "student.")
            {
            element.innerHTML += ".";
            }
            else if(element.innerHTML == "student")
            {
            element.innerHTML += ".";
            }
               else if(element.innerHTML == "studen")
                {
                element.innerHTML += "t";
                }
                else if(element.innerHTML == "stude")
                {
                    element.innerHTML += "n";
                }
                else if(element.innerHTML == "stud")
                {
                    element.innerHTML += "e";
                }
                else if(element.innerHTML == "stu")
                {
                    element.innerHTML += "d";
                }
                else if(element.innerHTML == "st")
                {
                    element.innerHTML += "u";
                }
                else if(element.innerHTML == "s")
                {
                    element.innerHTML += "t";
                }
                else{
                    element.innerHTML += "s";
                }
            }
        
    }, 300);
  }