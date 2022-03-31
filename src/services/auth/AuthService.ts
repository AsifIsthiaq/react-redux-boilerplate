import axios from 'axios';
import authAxios from './Interceptor';

class AuthService {
  private authenticated: boolean;
  private static instance: AuthService;

  private constructor() {
    this.authenticated = false;
  }

  static getInstance = (): AuthService => {
    if (!AuthService.instance) {
      AuthService.instance = new AuthService();
    }
    return AuthService.instance;
  };

  get isLoggedIn(): boolean {
    // return !!sessionStorage.getItem('accessToken');
    return true;
  }

  get getAuthToken(): string {
    return `${sessionStorage.getItem('accessToken')}`;
  }

  get getRefreshToken(): string {
    return `${sessionStorage.getItem('refreshToken')}`;
  }

  login = (data: any) => {
    return authAxios.post('/auth/login', data);
  };

  logout = async () => {
    const headersAT = {
      headers: {
        Authorization: 'Bearer ' + sessionStorage.getItem('accessToken'),
      },
    };
    const headersRT = {
      headers: {
        Authorization: 'Bearer ' + sessionStorage.getItem('refreshToken'),
      },
    };
    axios.post(
      `${process.env.REACT_APP_BASE_API_URL}/auth/logout/at`,
      {},
      headersAT,
    );
    axios.post(
      `${process.env.REACT_APP_BASE_API_URL}/auth/logout/rt`,
      {},
      headersRT,
    );
    sessionStorage.clear();

    return Promise.resolve(false);
  };
}

export default AuthService.getInstance();
