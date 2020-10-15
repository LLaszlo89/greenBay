import jwt from "jsonwebtoken";
import assert from 'assert';
import {SessionService} from '../src/services/SessionService'

jest.mock('jsonwebtoken')

describe("Testing SessionService",()=>{

  it("Should return token" , async()=>{

    const inputData = {
      username: 'Lehel',
      password: 'password',
    }

    const expectedData = {
      token: { user_id: 1, user_isAdmin: 1, user_name: 'Lehel' },
      cash_balance: 100,
      name: "Lehel",
      picture: "www.test.com"
    };

    const passwordValidationService = {
      passwordCheck: async () => {
        return true;
      },
    };

    const userRepository = {
      user: async ()=>{
        return {
          results: [
            {
              id: 1,
              name: 'Lehel',
              email: 'test@test.com',
              password: 'password',
              cash_balance: 100,
              profile_pic: 'www.test.com'
            },
          ],
        };
      }
    }

    const sessionService = new SessionService({
      userRepository , passwordValidationService
    });

    let secret ="secret"

     jwt.sign.mockImplementation((data, secret) => {
      return data;
    });

    assert.deepStrictEqual(await sessionService.login(inputData), expectedData);
  })
})
