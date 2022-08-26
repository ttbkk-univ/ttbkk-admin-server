export function keyFromValue<T>(enumType: T, value: string): string {
  return Object.keys(enumType).find((key: string) => enumType[key] === value);
}
