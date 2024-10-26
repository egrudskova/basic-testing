// Uncomment the code below and write your tests
import { getBankAccount, InsufficientFundsError, TransferFailedError } from '.';

describe('BankAccount', () => {
  test('should create account with initial balance', () => {
    expect(getBankAccount(10).getBalance()).toEqual(10);
  });

  test('should throw InsufficientFundsError error when withdrawing more than balance', () => {
    expect(() => getBankAccount(10).withdraw(11)).toThrowError(
      InsufficientFundsError,
    );
  });

  test('should throw error when transferring more than balance', () => {
    expect(() =>
      getBankAccount(10).transfer(11, getBankAccount(10)),
    ).toThrowError(InsufficientFundsError);
  });

  test('should throw error when transferring to the same account', () => {
    const bankAcc = getBankAccount(10);
    expect(() => bankAcc.transfer(1, bankAcc)).toThrowError(
      TransferFailedError,
    );
  });

  test('should deposit money', () => {
    expect(getBankAccount(10).deposit(10).getBalance()).toBe(20);
  });

  test('should withdraw money', () => {
    expect(getBankAccount(10).withdraw(5).getBalance()).toBe(5);
  });

  test('should transfer money', () => {
    const backAcc1 = getBankAccount(10);
    const backAcc2 = getBankAccount(0);
    backAcc1.transfer(5, backAcc2);
    expect(backAcc1.getBalance()).toBe(5);
    expect(backAcc2.getBalance()).toBe(5);
  });

  test('fetchBalance should return number in case if request did not failed', async () => {
    //TODO
  });

  test('should set new balance if fetchBalance returned number', async () => {
    //TODO
  });

  test('should throw SynchronizationFailedError if fetchBalance returned null', async () => {
    //TODO
  });
});
