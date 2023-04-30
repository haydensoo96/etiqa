const UserController = require('./indexControllers');
const UserDao = require('./../daos/userDao.js');

jest.mock('./../daos/userDao.js');

describe('GetUser', () => {
  it('returns a list of users', async () => {
    const mockUserList = [
      { id: 1, name: 'John Doe' },
      { id: 2, name: 'Jane Smith' },
    ];
    UserDao.GetUser.mockResolvedValue(mockUserList);

    const req = {};
    const res = {
      json: jest.fn(),
    };

    await UserController.GetUser(req, res);

    expect(res.json).toHaveBeenCalledWith(mockUserList);
  });

  it('throws an error if DAO call fails', async () => {
    const mockError = new Error('Database error');
    UserDao.GetUser.mockRejectedValue(mockError);

    const req = {};
    const res = {
      json: jest.fn(),
    };

    await expect(UserController.GetUser(req, res)).rejects.toThrow(mockError);
  });
});
