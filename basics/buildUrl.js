import {buildUrl} from 'build-url';

buildUrl('http://example.com', {
  path: 'about',
  hash: 'contact',
  queryParams: {
    foo: bar,
    bar: ['foo', 'bar']
  }
});

//// returns http://example.com/about?foo=bar&bar=baz#contact

buildUrl('http://example.com', {
  queryParams: {
    foo: 'bar',
    bar: ['one', 'two', 'three']
  }
});

// returns http://example.com?foo=bar&bar=one,two,three