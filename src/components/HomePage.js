import { AllBlogPostTag } from '../constants.js';
import { BasicLayout } from '../layout/BasicLayout';
import { Allblogpost } from './AllBlogPost';
import { Carousel } from './Carousel';
import { Trending } from './Trending';

export const HomePage = () => {
  return (
    <BasicLayout>
      <Carousel />
      <Trending />
      <Allblogpost postTag={AllBlogPostTag} />
    </BasicLayout>
  );
};
