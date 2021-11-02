import 'reflect-metadata';

export function ApiProperty(...args: any[]): PropertyDecorator {
  return function (target: Object, propertyKey: string | symbol) {
    // console.log("API PROPERTY DOES THIS WORK?")
  };
}