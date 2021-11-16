import fetchOneEpisode from "./fetch-one-episode";

import axios from "axios";

jest.mock("axios", () => {
  return {
    get: jest.fn(() => Promise.resolve({ data: {} })),
  };
});
describe("Unit - FetchOneEpisode", () => {
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
  const data = {
    id: 1,
    name: "Pilot",
    season: 1,
    number: 1,
    image: {
      original:
        "https://static.tvmaze.com/uploads/images/original_untouched/1/4388.jpg",
    },
    summary:
      "<p>When the residents of Chester's Mill find themselves trapped under a massive transparent dome with no way out, they struggle to survive as resources rapidly dwindle and panic quickly escalates.</p>",
  };

  it("fetches successfully data from an API", async () => {
    const successHandler = jest.fn();
    const errorHandler = jest.fn();
    const users = mockResponseData(true, data);

    const episodeID = "105";

    axios.get.mockImplementationOnce(() => {
      return Promise.resolve(users);
    });
    const response = await fetchOneEpisode(
      episodeID,
      {},
      successHandler,
      errorHandler
    );

    expect(response.result.payload).toEqual(data);
  });
});
