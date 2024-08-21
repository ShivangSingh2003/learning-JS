// Immediately Invoked Function Expressions (IIFE)


//IIFE is used to prevent the pollution caused by Global Variables. The function is wrapped in parenthesis.
(function isConnected() { //named IIFE with name isConnected
    console.log(`DB Connected`);
    
}) (); //semi-colon is mandatory so that the compiler knows where the context of the IIFE ends.

((name) => { //unnamed IIFE
    console.log(`DB Connected 2 ${name}`);
    
}) ("shivang"); 

// isConnected()