function testeAberto(array=[], valor){

    for (i = 0; i <= array.length; i++)
    {
        for (j = 0; j <= array.length; j++)
        {
            if(array[j] + array[i] && array[i] + array[j] == valor)
            {
                console.log("Valor do Array: %d + %d = %d (Índice %d e %d)\n", array[i], array[j], array[i] + array[j], i, j);
            }
        }
    }
}

testeAberto([1,2,3,4,5,6,7,8,9], 10); // Valores do array e Valor alvo
// testeAberto([3,8,9,6,8,5], 10);
// testeAberto([4,8,6,1,3,7], 7);
