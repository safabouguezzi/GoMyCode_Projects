function dot_product(V1, V2, ps) {
    var ps = 0;

    for (i = 0; i < V1.length; i++) {
        ps += V1[i] * V2[i];
    }
    console.log("Dot product =", ps);

    return (ps)
}

var vectors = [[1, -1, 7], [7, -7, 0], [9, 0, -9], [0, 0, 0]];
var j, k;
var dp = 0;

for (k = 0; k < vectors.length - 1; k++) {
    console.log("k =", k);
    for (j = k + 1; j < vectors.length; j++) {
        console.log("k =", k, "and j =", j);
        if (vectors[k].length === vectors[j].length) {
            if (dot_product(vectors[k], vectors[j], dp) === 0) {
                console.log(vectors[k], "and", vectors[j], "are orthogonal");
            }
            else {
                console.log(vectors[k], "and", vectors[j], "are not orthogonal");
            }
        }
        else {
            console.log(vectors[k], 'and', vectors[j], "Don't have the same length.");
        }
    }
}




