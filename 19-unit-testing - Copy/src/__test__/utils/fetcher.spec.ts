import fetcher from "@/utils/swr/fetcher";

describe("fetcher util", () => {
  beforeEach(() => {
    global.fetch = jest.fn(() => Promise.resolve({ json: () => Promise.resolve({ ok: true, data: "ok" }) })) as any;
  });

  it("should call fetch and return json", async () => {
    const result = await fetcher("/api/test");
    expect(global.fetch).toHaveBeenCalledWith("/api/test");
    expect(result).toEqual({ ok: true, data: "ok" });
  });
});
