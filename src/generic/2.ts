/* 
You have the type AllType. There is a function compare that takes two objects. These objects contain fields of AllType. Your task is to use Pick and generics to specify that the fields of these objects belong to AllType. The compare function should return AllType.
*/

type AllType = {
  name: string;
  position: number;
  color: string;
  weight: number;
};

function compare<T extends AllType, U extends AllType>(
  top: Pick<T, keyof AllType>,
  bottom: Pick<U, keyof AllType>,
): AllType {
  return {
    name: top.name,
    color: top.color,
    position: bottom.position,
    weight: bottom.weight,
  };
}

export {};
