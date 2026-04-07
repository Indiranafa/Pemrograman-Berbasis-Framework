import withAuth from '../../Middleware/withAuth';
import { NextResponse } from 'next/server';

const mockMiddleware = jest.fn((req, next) => NextResponse.next());
const mockReq = (pathname = '/') => ({
  nextUrl: { pathname, search: '', href: '', origin: '', protocol: '', host: '', port: '', username: '', password: '', hash: '', searchParams: { set: jest.fn() } },
  url: 'http://localhost' + pathname,
});
const mockNext = {};

describe('withAuth middleware', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should call middleware if not requireAuth', async () => {
    const handler = withAuth(mockMiddleware);
    await handler(mockReq('/'), mockNext);
    expect(mockMiddleware).toHaveBeenCalled();
  });

  it('should redirect to login if not authenticated', async () => {
    jest.mock('next-auth/jwt', () => ({ getToken: jest.fn().mockResolvedValue(null) }));
    const handler = withAuth(mockMiddleware, ['/admin']);
    const req = mockReq('/admin');
    const res = await handler(req, mockNext);
    expect(res.headers.get('location')).toContain('/auth/login');
  });

  it('should redirect to home if not admin', async () => {
    jest.mock('next-auth/jwt', () => ({ getToken: jest.fn().mockResolvedValue({ role: 'user' }) }));
    const handler = withAuth(mockMiddleware, ['/admin']);
    const req = mockReq('/admin');
    const res = await handler(req, mockNext);
    expect(res.headers.get('location')).toBe('http://localhost/');
  });
});
