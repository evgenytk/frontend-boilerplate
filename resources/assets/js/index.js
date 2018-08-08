import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import Main from './containers/Main.jsx';

/**
 * Load axios HTTP library for access in any place
 * and default settings
 */
window.axios = axios;
// window.axios.defaults.headers.common['Authorization'] = 'YOUR_TOKEN';
// window.axios.defaults.baseURL = 'https://api.example.com';

/**
 * Register the CSRF Token as a common header
 * for Laravel App
 */
// let token = document.head.querySelector('meta[name="csrf-token"]');
// if (token) {
//     window.axios.defaults.headers.common['X-CSRF-TOKEN'] = token.content;
//     window.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';
// } else {
//     console.error('CSRF token not found: https://laravel.com/docs/csrf#csrf-x-csrf-token');
// }a

ReactDOM.render(<Main />, document.getElementById('root'));
