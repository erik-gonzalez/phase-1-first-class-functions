function receivesAFunction(Spy) {
    console.log(Spy());
}

const returnsANamedFunction = function (){
    return returnsANamedFunction
}

function returnsAnAnonymousFunction() {
    return function () {}
}