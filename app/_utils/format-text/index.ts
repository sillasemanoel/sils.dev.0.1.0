// Mostrar todo o nome em caixa baixa
export const getNameToLowerCase = (name: string): string => {
  return name.toLowerCase();
};

// Mostrar todo o nome em caixa alta
export const getNameToUpperCase = (name: string): string => {
  return name.toUpperCase();
};

// Mostrar apenas os dois primeiros nomes com a primeira letra em maiúsculo (Capitalizado)
export const getTwoNamesCapitalized = (name: string): string => {
  const names = name.split(" ");
  const firstTwoNames = names.slice(0, 2);
  const capitalizedNames = firstTwoNames
    .map((n) => n.charAt(0).toUpperCase() + n.slice(1).toLowerCase())
    .join(" ");
  return capitalizedNames;
};

// Mostrar apenas a primeira letra da frase em maiúsculo (Sentença)
export const getNameSentence = (name: string): string => {
  const names = name.split(" ");
  const capitalized = names
    .map((n, index) =>
      index === 0
        ? n.charAt(0).toUpperCase() + n.slice(1).toLowerCase()
        : n.toLowerCase()
    )
    .join(" ");
  return capitalized;
};

// Mostrar apenas as inicias em caixa baixa
export const getInitialsToLowerCase = (name: string): string => {
  const names = name.split(" ");
  const initials = names.map((n) => n[0].toLowerCase()).join("");
  return initials;
};

// Mostrar apenas as inicias em caixa alta
export const getInitialsToUpperCase = (name: string): string => {
  const names = name.split(" ");
  const initials = names
    .map((n) => n[0].toUpperCase())
    .slice(0, 2)
    .join("");
  return initials;
};

// Mostrar apenas as as 2 primeiras inicias em caixa baixa
export const getTwoInitialsToLowerCase = (name: string): string => {
  const names = name.split(" ");
  const initials = names
    .map((n) => n[0].toLowerCase())
    .slice(0, 2)
    .join("");
  return initials;
};

// Mostrar apenas as as 2 primeiras inicias em caixa alta
export const getTwoInitialsToUpperCase = (name: string): string => {
  const names = name.split(" ");
  const initials = names
    .map((n) => n[0].toUpperCase())
    .slice(0, 2)
    .join("");
  return initials;
};

// Substituir espaços por hífens
export const replaceSpacesWithHyphens = (name: string): string => {
  return name.toLowerCase().replace(/\s+/g, "-");
};

// Substituir espaços por nada e capitalizar a primeira letra de cada palavra a partir da segunda
export const camelCaseName = (name: string): string => {
  return name
    .split(" ")
    .map(
      (word, index) =>
        index === 0
          ? word.toLowerCase() // Mantém a primeira palavra em minúsculas
          : word.charAt(0).toUpperCase() + word.slice(1).toLowerCase() // Capitaliza a primeira letra das palavras subsequentes
    )
    .join("");
};
