import { RateLimiter } from "limiter";
const limiter = new RateLimiter({
  interval: 5000,
  tokensPerInterval: 1,
  fireImmediately: true,
});

export { limiter };
