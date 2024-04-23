import { getTimeStamp } from "./date";
import * as date from "./date";
import { getUser } from "./app";


describe("date", () => {
  it('returns timestamp', () => {
    jest
    .spyOn(date, "getTimeStamp")
    .mockReturnValue("2024-04-18T11:45:51.173Z")
    const user = getUser(); 
    const timestamp = getTimeStamp();
    expect(timestamp).toEqual('2024-04-18T11:45:51.173Z');
expect(user).toEqual({
  name: 'Anna', 
  accountStart: 
  "2024-04-18T11:45:51.173Z"
})
expect(getTimeStamp).toHaveBeenCalled();
  });
});
