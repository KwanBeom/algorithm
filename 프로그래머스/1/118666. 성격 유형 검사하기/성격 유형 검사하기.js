function solution(survey, choices) {
    const result = {R:0,T:0,C:0,F:0,J:0,M:0,A:0,N:0};

    survey.forEach((type, index) => {
        if(choices[index] < 4) result[type[0]] += Math.abs(choices[index] - 4);
        if(choices[index] > 4) result[type[1]] += choices[index] - 4;
    });
    
    return `${result.R < result.T ? 'T' : 'R'}${result.C < result.F ? 'F' : 'C'}${result.J < result.M ? 'M' : 'J'}${result.A < result.N ? 'N' : 'A'}`;
}