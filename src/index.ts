const toFirstCharToUpperCase = ([firstChar = "", ...rest]: string) => `${firstChar.toUpperCase()}${rest.join("")}`

export const snake2pascal = (text: string) => text.split(/[^A-Za-z0-9]/).map(toFirstCharToUpperCase).join("")
