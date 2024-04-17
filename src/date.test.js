import dayjs from "dayjs";

describe("date", () => {
  it("runs", () => {
    const timestamp = dayjs();
    expect(timestamp).toEqual(timestamp);
  });
});
