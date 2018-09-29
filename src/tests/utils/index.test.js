import { getDataObjectFromArray } from '../../utils'

describe('get objects of objects with "id" key from array of objects', () => {
  const array = [
    { id: 'someId', someKey: '123', name: 'yur' },
    { id: 'idSome', someKey: '567', name: 'ouy' },
  ]

  const arrayIds = ['someId', 'idSome']

  const result = getDataObjectFromArray(array)

  it('should have byId property with keys equal to ids', () => {
    expect(Object.keys(result)).toEqual(
      expect.arrayContaining(
        arrayIds
      )
    )
  })

  it('should have byId property with values equal to object', () => {
    expect(Object.values(result)).toEqual(
      expect.arrayContaining(
        array
      )
    )
  })
})
