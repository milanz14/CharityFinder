const mockResponse = {
    data: {
        results: [
            {
                id: 12345,
                name: "Mock Charity",
                postal_code: 12345,
                region: "ON",
                street1: "12345 Fake Street",
            },
        ],
    },
};

export default {
    get: jest.fn().mockResolvedValue(mockResponse),
};
