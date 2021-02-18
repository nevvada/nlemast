import post1 from './2016-09-11';
import post2 from './2017-04-20';

const posts: Posts = {
  '2016-09-11': {
    date: post1.date,
    title: post1.title,
    markdown: post1.markdown,
  },
  '2017-04-20': {
    date: post2.date,
    title: post2.title,
    markdown: post2.markdown,
  }
};

export default posts;
