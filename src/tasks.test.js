import { greet, User, ForceConstructor, curry } from './tasks.js';

describe("Тесты для кастомной функции myBind", () => {
  test("1. Является ли greet функцией?", () => {
    expect(greet).toBeInstanceOf(Function);
  });

  test("2. Получается ли ожидаемый текст?", () => {
      const person = { name: "Алиса" };
      let random = Math.random();
      let random2 = Math.random();
      let greetAlice = greet.myBind(person);
      expect(greetAlice(random, random2)).toEqual(`${random}, Алиса${random2}`);
  });

});

describe("Тесты для User", () => {

  test("1. Является ли User объектом?", () => {
    expect(User).toBeInstanceOf(Object);
  });

  test("2. User имеет метод ввода имени?", () => {
    const user = new User();
    expect(user.askName).toBeInstanceOf(Function);
  });

  test("3. User имеет метод ввода возраста?", () => {
    const user = new User();
    expect(user.askAge).toBeInstanceOf(Function);
  });

  test("4. User имеет метод вывода имени?", () => {
    const user = new User();
    expect(user.showAgeInConsole).toBeInstanceOf(Function);
  });

  test("5. User имеет метод вывода возраста?", () => {
    const user = new User();
    expect(user.showNameInAlert).toBeInstanceOf(Function);
  });

  test('6. Имя берется из prompt', () => {
    const user = new User();
    let name = "Алиса";
    global.prompt = jest.fn().mockReturnValueOnce(name);
    user.askName();
    expect(user.name).toBe(name);
  });

  test('7. Возраст берется из prompt', () => {
    const user = new User();
    let age = 21;
    global.prompt = jest.fn().mockReturnValueOnce(age);
    user.askAge();
    expect(user.age).toBe(age);
  });

});

describe("Тесты для ForceConstructor", () => {
  test("1. Является ли User объектом?", () => {
    expect(ForceConstructor).toBeInstanceOf(Function);
  });

  test('2. ForceConstructor с new', () => {
    let arg1 = "Первый аргумент";
    let arg2 = "Второй аргумент";
    const newObj = new ForceConstructor(arg1, arg2);
    expect(newObj.arg1).toBe(arg1);
    expect(newObj.arg2).toBe(arg2);
  });

  test('3. ForceConstructor без new', () => {
    let arg1 = "Первый аргумент";
    let arg2 = "Второй аргумент";
    const newObj = ForceConstructor(arg1, arg2);
    expect(newObj instanceof ForceConstructor).toBe(true);
  });
});

describe("Тесты для curry", () => {
  test("1. Является ли curry функцией?", () => {
    expect(curry).toBeInstanceOf(Function);
  });

  test("2. Проверяем переданную функцию суммирования", () => {
    function sum(a,b) {
      return a + b;
    }
    expect(curry(sum)(1)(3)).toBe(4);
  });

  test("3. Проверяем переданную функцию умножения", () => {
    function sum(a,b) {
      return a * b;
    }
    expect(curry(sum)(4)(6)).toBe(24);
  });


});