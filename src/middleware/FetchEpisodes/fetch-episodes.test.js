import fetchEpisodesData from "./fetch-episodes";

import axios from "axios";

jest.mock("axios", () => {
  return {
    get: jest.fn(() => Promise.resolve({ data: {} })),
  };
});
describe("Unit - FetchEpisodesData", () => {
  afterEach(() => {
    jest.clearAllMocks();
  });
  const mockResponseData = jest.fn((success, payload) => {
    return {
      data: {
        result: {
          success,
          payload,
        },
      },
    };
  });
  const data = [
    {
      id: 13935,
      name: "Asylum of the Daleks",
      season: 7,
      number: 1,
    },
    {
      id: 13936,
      name: "Dinosaurs on a Spaceship",
      season: 7,
      number: 2,
    },
  ];

  it("fetches successfully data from an API", async () => {
    const successHandler = jest.fn();
    const errorHandler = jest.fn();
    const users = mockResponseData(true, data);

    const seasonID = "100";

    axios.get.mockImplementationOnce(() => {
      return Promise.resolve(users);
    });
    const response = await fetchEpisodesData(
      seasonID,
      {},
      successHandler,
      errorHandler
    );

    expect(response.result.payload).toEqual(data);
  });
});
