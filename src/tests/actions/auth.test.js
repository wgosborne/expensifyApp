import { login, logout } from "../../actions/auth";

test('should generate login action object', () => {
    const action = login('123');
    expect(action).toEqual({ //conpares the actual values of objects or arrays so we need toEqual for objects and arrays. It iterates over things inside
        type: 'LOGIN',
        uid: '123'
    });
});

test('should generate logout action object', () => {
    const action = logout();
    expect(action).toEqual({ //conpares the actual values of objects or arrays so we need toEqual for objects and arrays. It iterates over things inside
        type: 'LOGOUT'
    });
});