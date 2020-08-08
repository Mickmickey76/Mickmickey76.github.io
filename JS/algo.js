/*
Kávéfőző bekapcsolása
IF nincs elég kávé THEN
kávé hozzáadása
ENDIF
IF nincs elég víz THEN
víz hozzáadása
ENDIF
WHILE nem melegedett fel
10 mp várakozás
ENDWHILE
Csésze odahelyezése
Gomb megnyomása
*/

/*
Összegzés algoritmusa:

összeg=0
Ciklus amíg van még szám, ADDIG
szám=következő elem
összeg= összeg + szám
Ciklus vége
*/

let numericArray=[1,3,2,5,4,7,6,9];
let sum=0;
for (let i=0; i<numericArray.length; i++) {
    sum+=numericArray [i];
}
console.log ("Sum: ", sum);


/*
Számlálás algoritmusa
db=0
Ciklus amíg van még szám, addig
szám=következő elem
Ha igaz a feltétel a számra, akkor 
db=db+1
Feltétel vége
Ciklus vége
*/

let amount = 0;
for (let i = 0; i < numericArray.length; i++) {
  if (numericArray[i]%2==0) 
  amount ++;
}
console.log ("Even numbers: ", amount)

/*
Szélsőérték keresés algoritmusa:
legnagyobb=első elem
Ciklus amíg van még szám, addig
    szám=következő szám
    Ha a szám > legnagyobb, akkor
        legnagyobb=szám
    Feltétel vége
Ciklus vége
*/

let biggest=numericArray[0];
for (let i=0; i < numericArray.length; i++) {
    if (numericArray[i] > biggest)
    biggest = numericArray [i];
}
console.log ("The biggest element: ", biggest);

let smallest=numericArray[0];
for (let i=0; i > numericArray.length; i++) {
    if (numericArray[i] < smallest)
    smallest = numericArray [i];
}
console.log ("The smallest element: ", smallest);



/*
Eldöntés tétele (algoritmusa)
találat=hamis
Ciklus amíg van elem és találat=hamis
    szám=következő elem
    ha igaz a feltétel a számra, akkor
        találat=igaz
    Feltétel vége
Ciklus vége

*/

let contains=false;
for (let i=0; i < numericArray.length && contains == false; i++) {
    if (numericArray[i] ==5)
    contains=true;
}
console.log ("This array contains 5: ", contains);

<div></div>