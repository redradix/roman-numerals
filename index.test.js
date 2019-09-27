const romanNumbers = require('./index')

describe('Kata Roman Numerals', () => {
  const SAMPLES = [
    {
      title: '1',
      input: 1,
      expected: 'I'
    },
    {
      title: '2',
      input: 2,
      expected: 'II'
    },
    {
      title: '3',
      input: 3,
      expected: 'III'
    },
    {
      title: '4',
      input: 4,
      expected: 'IV'
    },
    {
      title: '5',
      input: 5,
      expected: 'V'
    },
    {
      title: '6',
      input: 6,
      expected: 'VI'
    },
    {
      title: '7',
      input: 7,
      expected: 'VII'
    },
    {
      title: '8',
      input: 8,
      expected: 'VIII'
    },
    {
      title: '9',
      input: 9,
      expected: 'IX'
    },
    {
      title: '10',
      input: 10,
      expected: 'X'
    },
    {
      title: '15',
      input: 15,
      expected: 'XV'
    },
    {
      title: '20',
      input: 20,
      expected: 'XX'
    },
    {
      title: '39',
      input: 39,
      expected: 'XXIX'
    },
    {
      title: '40',
      input: 40,
      expected: 'XL'
    }
  ]

  SAMPLES.forEach(sample => {
    it(sample.title, () => {
      expect(romanNumbers(sample.input)).toBe(sample.expected)
    })
  })
})
