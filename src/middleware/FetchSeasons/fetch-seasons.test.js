import fetchSeasonsData from "./fetch-seasons";

import axios from "axios";

jest.mock("axios", () => {
  return {
    get: jest.fn(() => Promise.resolve({ data: {} })),
  };
});
describe("Unit - FetchSeasonsData", () => {
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
      id: 859,
      url: "https://www.tvmaze.com/seasons/859/doctor-who-season-1",
      number: 1,
      name: "",
      episodeOrder: 13,
      premiereDate: "2005-03-26",
      endDate: "2005-12-25",
    },
    {
      id: 860,
      url: "https://www.tvmaze.com/seasons/860/doctor-who-season-2",
      number: 2,
      name: "",
      episodeOrder: 13,
      premiereDate: "2006-04-15",
      endDate: "2006-12-25",
    },
  ];

  it("fetches successfully data from an API", async () => {
    const successHandler = jest.fn();
    const errorHandler = jest.fn();
    const users = mockResponseData(true, data);

    const showID = "100";

    axios.get.mockImplementationOnce(() => {
      return Promise.resolve(users);
    });
    const response = await fetchSeasonsData(
      showID,
      {},
      successHandler,
      errorHandler
    );

    expect(response.result.payload).toEqual(data);
  });
});
