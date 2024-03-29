import post1 from './2020-07-11';
import post2 from './2020-08-22';
import post3 from './2021-03-22';

const posts: Posts = {
  [post3.date]: {
    date: post3.date,
    title: post3.title,
    markdown: post3.markdown,
  },
  [post2.date]: {
    date: post2.date,
    title: post2.title,
    markdown: post2.markdown,
  },
  [post1.date]: {
    date: post1.date,
    title: post1.title,
    markdown: post1.markdown,
  },
};

export default posts;
