// function Declaration

    funcDeclarationDemo(); // function will call

    function funcDeclarationDemo(){
        console.log("function declaration");
    }

    funcDeclarationDemo(); // function will call


// function expression

    // using let

    //funcExpressionLet(); // Cannot access 'funcExpressionLet' before initialization. // it will throw run time exception

    let funcExpressionLet=function(){
        console.log("function expression using let");
    }

    funcExpressionLet(); // function will call

    // using var

    //funcExpressionVar(); //funcExpressionVar is not a function // it will throw run time exception

    var funcExpressionVar=function(){
        console.log("function expression using var");
    }

    funcExpressionVar(); // function will call

