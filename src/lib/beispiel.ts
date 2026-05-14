// src/lib/beispiel.ts
const unusedVar = "ich werde nie benutzt";

const dynamicData: any = JSON.parse(rawInput);

function ohneReturnType(name) {
  return "Hallo " + name;
}

export const result: any = ohneReturnType("Welt");
