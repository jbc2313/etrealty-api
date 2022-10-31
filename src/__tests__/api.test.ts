import { describe, expect, jest, test, beforeAll } from '@jest/globals'
import { Request, Response } from 'express'



// I have not figured out how to test
// each api endpoint yet.
// I will update this when I do.
//


beforeAll(() => {
    //setup enviroment for test here
    
})


jest.mock('express')

// let mockedRequest: jest.Mocked<typeof Request> = {
//
// };



describe('call mocked request and inspect it.', () => {
    test(('look at mocked request'), () => {
        // expect(mockedRequest).toBeCalled
    })
})
