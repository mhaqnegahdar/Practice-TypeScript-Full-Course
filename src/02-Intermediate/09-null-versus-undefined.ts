//  null == undefined    True

function decorate(value: string | null | undefined) {
  if ((value != null)) return `-- ${value.trim()}  --`;
}
