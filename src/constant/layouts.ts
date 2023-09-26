import {
  AboutBethany,
  AboutPageJimmy,
  HomePageBethany,
  HomePageJimmy,
} from '@/app/layouts';

export const layouts = {
  home: {
    jimmy: HomePageJimmy,
    bethany: HomePageBethany,
  },
  about: {
    jimmy: AboutPageJimmy,
    bethany: AboutBethany,
  },
  default:{

  }
};


// const res = await fetch(`https://blazorstagingapi.azurewebsites.net/api/Config?URL=${domain}`)