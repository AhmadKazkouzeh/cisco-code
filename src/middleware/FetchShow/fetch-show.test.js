import fetchShowData from "./fetch-show";

import axios from "axios";

jest.mock("axios", () => {
  return {
    get: jest.fn(() => Promise.resolve({ data: {} })),
  };
});
describe("Unit - FetchShowData", () => {
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
    id: 210,
    url: "https://www.tvmaze.com/shows/210/doctor-who",
    name: "Doctor Who",
    type: "Scripted",
    language: "English",
    genres: ["Drama", "Adventure", "Science-Fiction"],
  };

  it("fetches successfully data from an API", async () => {
    const successHandler = jest.fn();
    const errorHandler = jest.fn();
    const users = mockResponseData(true, data);

    axios.get.mockImplementationOnce(() => {
      return Promise.resolve(users);
    });
    const response = await fetchShowData({}, successHandler, errorHandler);

    expect(response.result.payload).toEqual(data);
  });
});
