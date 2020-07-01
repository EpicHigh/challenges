import { describe, expect } from '@jest/globals';
import { summaryDonations } from './helpers';

describe('helpers', function () {
  it('`summaryDonations` should calculate donations correctly', function () {
    expect(summaryDonations([1, 2, 3, 4])).toEqual(10);
  });
});
