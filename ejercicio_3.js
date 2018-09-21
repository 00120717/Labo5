function fibonacci(n){

    var a = 0,b=1;
    console.log(a);
    console.log(b);

    for(let i=0; i<=n;i++){
        fi= a + b;
        console.log(fi);
        a=b;
        b=fi;

    }


}

