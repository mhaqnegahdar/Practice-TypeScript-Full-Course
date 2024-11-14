let anyVariable;
let unknownVariable;
// Anything can be assigned to both
anyVariable = " Hellow";
anyVariable = 123;
unknownVariable = " Hellow";
unknownVariable = 123;
// ! unknown has requires type safety
if (typeof unknownVariable == "string")
    unknownVariable.padStart(4, "*");
if (typeof unknownVariable == "number")
    unknownVariable.toFixed(2);
// ! Any don't
// Error : padStart is not a numeric function
// Usecase: Allowing easy migration to TS
anyVariable.padStart(4, "*");
anyVariable.toFixed(2);
//# sourceMappingURL=09-anyAndUnknown.js.map