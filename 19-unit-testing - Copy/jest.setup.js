if (typeof global.fetch === 'undefined') {
  global.fetch = require('node-fetch');
}
import '@testing-library/jest-dom';