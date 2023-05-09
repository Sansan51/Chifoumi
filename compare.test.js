const { test, expect } = require('@jest/globals')
const comparer = require('./index');

test('Test si pierre contre ciseaux est égal à pierre', () => {
  expect(comparer('pierre', 'ciseaux')).toBe('pierre');
});

test('Test si feuille contre ciseaux est égal à ciseaux', () => {
  expect(comparer('feuille', 'ciseaux')).toBe('ciseaux');
});

test('Test si ciseaux contre pierre est égal à pierre', () => {
  expect(comparer('ciseaux', 'pierre')).toBe('pierre');
});

test('Test si feuille contre pierre est égal à feuille', () => {
  expect(comparer('feuille', 'pierre')).toBe('feuille');
});

test('Test si pierre contre feuille est égal à feuille', () => {
  expect(comparer('pierre', 'feuille')).toBe('feuille');
});

test('Test si ciseaux contre ciseaux est égal à égalité', () => {
  expect(comparer('ciseaux', 'ciseaux')).toBe('égalité');
});

test('Test si feuille contre feuille est égal à égalité', () => {
  expect(comparer('feuille', 'feuille')).toBe('égalité');
});

test('Test si pierre contre pierre est égal à égalité', () => {
  expect(comparer('pierre', 'pierre')).toBe('égalité');
});