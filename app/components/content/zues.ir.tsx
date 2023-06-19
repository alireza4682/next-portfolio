const Zeus = () => {
  return (
    <div className="prose prose-sm dark:prose-invert">
      <ul>
        <li>
          used React's optimization techniques such as memoization, moving state
          down to leaves and avoiding useEffect hook for asynchronous data
          fetching to prevent unnecessary rerenders together with lazy loading
          components and images, windowing techniques and caching with react
          query and utilizing useTransition hook to achieve smoother user
          experience and lower first input delay(FID) metric in our customer's
          websites.
        </li>
        <li>
          reduced largest contentful paint(LCP) metric in customer's websites to
          be lower than 2.5sec, using optimized image formats, providing source
          set of images, preloading important assets(fetch priority) and
          identifying render blocking JavaScript.
        </li>
        <li>
          collaborated with colleagues to rebuild company's React component
          library with TypeScript and added storybook for component
          documentation and testing.
        </li>
        <li>
          transformed legacy websites into modern, high-performance platforms
          that was achieved by utilizing Next.js, a cutting-edge technology that
          incorporates server-side rendering (SSR) and static site generation
          (SSG). This approach resulted in significant improvements in search
          engine optimization (SEO) and overall performance.
        </li>
        <li>
          mentored 3 junior developers to achieve high performance and meet
          goals.
        </li>
      </ul>
    </div>
  );
};

export default Zeus;
