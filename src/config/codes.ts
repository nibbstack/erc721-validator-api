export default {

  /**
   * Tests Data.
   */
  TESTS_BASIC: [
    {id: 1, expected: true, condition: null, description: 'Sanity checks Find the amount of value (ether) assigned to CONTRACT_ADDRESS, it should be greater than or equal to zero. Find the code_size of CONTRACT_ADDRESS, it should be greater than zero.'},
    {id: 2, expected: true, condition: {'1': true}, description: 'Check interface 165.'},
    {id: 3, expected: true, condition: {'2': true}, description: 'Check interface ERC721.'},
    {id: 4, expected: null, condition: {'3': true}, description: 'Check interface ERC721Metadata.'},
    {id: 5, expected: null, condition: {'3': true}, description: 'Check interface ERC721Enumerable.'},
    {id: 6, expected: false, condition: {'2': true}, description: 'balanceOf(0) should throw.'},
    {id: 7, expected: true, condition: {'4': true}, description: 'name() should not throw.'},
    {id: 8, expected: true, condition: {'4': true}, description: 'symbol() should not throw.'},
    {id: 9, expected: true, condition: {'5': true}, description: 'totalSupply should be greater than 0.'},
    {id: 10, expected: true, condition: {'5': true}, description: 'tokenByIndex(0) should not throw.'}
  ],
  TESTS_TOKEN: [
    {id: 1, expected: true, condition: {'4': true}, description: 'tokenURI(TEST_TOKEN_ID) should not throw.'},
    {id: 2, expected: true, condition: {'3': true}, description: 'balanceOf(ownerOf(TEST_TOKEN_ID) should be > 0'},
    {id: 3, expected: true, condition: {'3': true}, description: 'ownerOf(TEST_TOKEN_ID) should return an address > 0.'}
  ],
  TESTS_TRANSFER: [
    {id: 1, expected: false, condition: {'3': true}, description: 'transferFrom giver to self, this should throw because giver does not authorize the transaction.'},
    {id: 2, expected: true, condition: {'3': true}, description: 'Get a token from giver, transferFrom self to a stub, check balanceOf() stub before and after transfer, it should be one more.'},
    {id: 3, expected: false, condition: {'3': true}, description: 'Get a token from giver, transferFrom to zero address, should throw.'},
    {id: 4, expected: true, condition: {'3': true}, description: 'Get a token from giver, safe transfer to stub by sending data ffff. Stub throws in callback if it does not receive ffff.'},
    {id: 5, expected: true, condition: {'3': true}, description: 'Get a token from giver, safe transfer to stub using the default argument. Stub throws in callback if it does not receive "".'},
    {id: 6, expected: false, condition: {'3': true}, description: 'Get a token from giver, safe transfer to contract stud that does not implement token receiver, should throw.'},
    {id: 7, expected: false, condition: {'3': true}, description: 'Get a token from giver, safe transfer to stub, the stub does not return the correct magic value, the transfer must throw.'},
    {id: 8, expected: true, condition: {'3': true}, description: 'Get a token from giver, approve stub, then check getApproved stub.'},
    {id: 9, expected: true, condition: {'3': true}, description: 'Get a token from giver, approve stub, then have stub transferFrom to stub2.'},
    {id: 10, expected: true, condition: {'3': true}, description: 'Get a token from giver, approveForAll to stub, then check isApprovedForAll.	Tester must approve Giver contract for the specific token.'},
    {id: 11, expected: true, condition: {'3': true}, description: 'Get a token from giver, approveFor All to stub, then have stub transferFrom to stub2.'},
    {id: 12, expected: true, condition: {'5': true}, description: 'Get token from giver, find balanceOf(self), tokenOfOwnerByIndex(0) should not throw.'},
    {id: 13, expected: false, condition: {'5': true}, description: 'Get token from giver, find balanceOf(self), tokenOfOwnerByIndex(balanceOf(self)) should throw.'}
  ],
};
