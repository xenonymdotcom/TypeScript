//// [assignmentCompatWithGenericCallSignatures2.ts]
// some complex cases of assignment compat of generic signatures. No contextual signature instantiation

interface A {
    <T>(x: T, ...y: T[][]): void
}

interface B {
    <S>(x: S, ...y: S[]): void
}

var a: A;
var b: B;

// Both ok
a = b;
b = a;


//// [assignmentCompatWithGenericCallSignatures2.js]
var a;
var b;
a = b;
b = a;