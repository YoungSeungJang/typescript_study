interface LabeledValue {
  label: string;
}

function printLabel(labeledObj: LabeledValue) {
  console.log(labeledObj.label);
}

let myObj = {
  size: 10,
  label: 'size 10',
};

printLabel(myObj);
