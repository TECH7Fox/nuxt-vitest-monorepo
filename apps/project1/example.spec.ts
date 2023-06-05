// @vitest-enviroment nuxt

import { describe, test, expect } from 'vitest'

describe('example', () => {
    test('should be an array', () => {
        expect([1, 2, 3]).toBeTypeOf("object")
    })
})
