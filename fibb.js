const fib = (f) => {
    let n1 = 0;
    let n2 = 1;
    let n_count = 0;
    
    if(f <= 0){
        return []
    }else if (f == 1){
        return [1]
    }else{
        var fibs = [n1, n2];
        f -= 1
        while(n_count < f){
            k = n1 + n2;
            fibs.push(k);
            n1 = n2;
            n2 = k;
            n_count += 1;
        }
        return fibs
    }
}
const prime_numbers = (n) => {
    var answers = []
    var fibb_array = fib(n)
    for(var l=0; l < fibb_array.length; l++){
        var fibNumber = fibb_array[l]
        var is_prime = false
        for(var d=fibNumber; d > 1; d--){
            if(fibNumber % d == 0 && d != fibNumber){
                is_prime = false
                break
            }else{
                is_prime = true
            }
        }
        if(is_prime){
            answers.push(fibNumber)
        }
    }
    return answers
};
