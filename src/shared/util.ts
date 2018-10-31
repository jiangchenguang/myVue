let toString = Object.prototype.toString;
let hasOwnProperty = Object.prototype.hasOwnProperty;

export function remove(arr: Array<any>, item: any): Array<any> | void {
  if (arr.length) {
    const idx = arr.indexOf(arr, item);
    if (idx > -1) {
      return arr.splice(idx, 1);
    }
  }
}

export function isObject(obj: any): boolean {
  return obj !== null && typeof obj === "object";
}

export function hasOwn(obj: object, key: string): boolean {
  return hasOwnProperty.call(obj, key);
}

export function isPlainObject(obj: any): boolean {
  return toString.call(obj) === "[object Object]";
}

export function makeMap(str: string): { [index: string]: true } {
  let map = Object.create(null);
  let list: string[] = str.split(",");
  for (let item of list) {
    map[item.trim()] = true;
  }
  return map;
}

export function no() {
  return false;
}

