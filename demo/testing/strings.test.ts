// jest
import { error } from 'console';
import { concat, div, failedString, slowString } from './strings';

it('concatenates two strings', () => {
  expect(concat('hello', 'world')).toBe('helloworld');
});

it('divides two numbers', () => {
  expect(div(10, 2)).toBe(5);
});

it('fails to divide by zero', () => {
  expect(() => div(10, 0)).toThrow();
});

it('resolves a promise the old way', async () => {
  slowString()
    .then((result) => {
      expect(result).toBe('sample');
    })
    .catch((error) => expect(error).toBeUndefined());
});

it('resolves a promise', async () => {
  await expect(slowString()).resolves.toBe('sample'); // Only checks that the promise resolves
});

it('rejects a promise', async () => {
  await expect(failedString()).rejects.toBe('whoops');
});
