import { QRL } from 'qwik';

const API_URL = process.env.REACT_APP_API_URL || '/api';

const AuthApiURL = QRL`${API_URL}/auth`;

export default class AuthService {
  async login(username, password) {
    try {
      const response = await fetch(AuthApiURL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ username, password })
      });

      if (response.ok) {
        const data = await response.json();
        localStorage.setItem('accessToken', data.accessToken);
        return true;
      }

      const error = await response.text();
      console.error(`Error logging in: ${error}`);
      return false;
    } catch (error) {
      console.error('Error logging in', error);
      return false;
    }
  }

  logout() {
    localStorage.removeItem('accessToken');
  }

  isLoggedIn() {
    const accessToken = localStorage.getItem('accessToken');
    return accessToken !== null;
  }
}
