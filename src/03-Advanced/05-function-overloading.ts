function createDate(timestampOrYear: number): Date;
function createDate(timestampOrYear: number, month: number, day: number): Date;

function createDate(
  timestampOrYear: number,
  month?: number,
  day?: number
): Date {
  if (month != null && day != null) {
    return new Date(timestampOrYear, month - 1, day);
  }
  return new Date(timestampOrYear);
}

createDate(2002, 8, 28); // 28 May 2002

// createDate(2017, 4 /* Error Ignored without function overloading */);

createDate(2002); // OK
