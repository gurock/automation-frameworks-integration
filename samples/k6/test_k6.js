import http from 'k6/http';
import { check, group } from 'k6';

const baseUrl = 'http://jsonplaceholder.typicode.com';

export const options = {
  vus: 1,
  stages: [
    { duration: '10s', target: 10 }
  ],
  thresholds: {
    http_req_failed: ['rate<0.01'], // http errors should be less than 1%
    http_req_duration: ['p(95)<20'], // 95% of requests should be below 20ms
    http_reqs: ['count >= 1400', 'count <= 1600'], //total requests generate by k6 should be within 1400 -- 1600
  },
};

export default function () {
  group('JSON Placeholder Performance Testing', function () {
    group('Posts endpoint', function () {
      const res = http.get(`${baseUrl}/posts`);
      check(res, {
        'is status code 200': (r) => r.status === 200,
      });
    });
  });
}

