const multiply =(x,y) => x*y;

const sqr = (x) => {
    multiply(x,x);
}

const isRightAnsgle =(a,b,c) => {
    return sqr(a) + sqr(b) == sqr(c);
      
};