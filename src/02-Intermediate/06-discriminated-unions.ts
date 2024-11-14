type ValidRequest = {
  // Discriminated value can have any name like "kind" , "type", ets...
  isValid: true;
  value: string;
};

type InvalidRequest = {
  isValid: false;
  errorReason: string;
};

type RequestResult = ValidRequest | InvalidRequest;

function logResult(result: RequestResult) {
  if (result.isValid == true) console.log(result.value);
  else console.log(result.errorReason);
}
