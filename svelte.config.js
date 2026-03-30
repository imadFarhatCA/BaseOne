import adapter from '@sveltejs/adapter-static';

export default {
  kit: {
    adapter: adapter({ fallback: '404.html' }),
    prerender: {
      origin: 'https://baseone-ec0.pages.dev'
    }
  }
};
