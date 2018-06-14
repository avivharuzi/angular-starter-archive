export interface SeoInterface {
  title?: string;
  meta?: {
    keywords?: string;
    description?: string;
    type?: string;
    card?: string;
    image?: string;
    url?: string;
    author?: string;
  };
}

const home: SeoInterface = {
  title: 'Home'
};

const errorPage: SeoInterface = {
  title: '404 - Page Not Found'
};

export const seo = {
  home,
  errorPage
};
