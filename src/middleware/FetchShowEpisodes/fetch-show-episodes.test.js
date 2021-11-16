import fetchShowEpisodesData from "./fetch-show-episodes";

import axios from "axios";

jest.mock("axios", () => {
  return {
    get: jest.fn(() => Promise.resolve({ data: {} })),
  };
});
describe("Unit - FetchShowEpisodesData", () => {
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
      id: 13857,
      url: "https://www.tvmaze.com/episodes/13857/doctor-who-1x01-rose",
      name: "Rose",
      season: 1,
      number: 1,
      summary:
        "<p>Rose Tyler meets a mysterious stranger called the Doctor, and realises Earth is in danger.</p>",
    },
    {
      id: 13858,
      url: "https://www.tvmaze.com/episodes/13858/doctor-who-1x02-the-end-of-the-world",
      name: "The End of the World",
      season: 1,
      number: 2,
      summary:
        "<p>The Doctor takes Rose on her first voyage through time, to the year five billion and the end of planet Earth.</p>",
    },
  ];

  it("fetches successfully data from an API", async () => {
    const successHandler = jest.fn();
    const errorHandler = jest.fn();
    const users = mockResponseData(true, data);

    axios.get.mockImplementationOnce(() => {
      return Promise.resolve(users);
    });
    const response = await fetchShowEpisodesData(
      {},
      successHandler,
      errorHandler
    );

    expect(response.result.payload).toEqual(data);
  });
});
