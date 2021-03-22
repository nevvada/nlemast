export default {
  date: '2021-03-22',
  title: 'Three Approaches for Lazy Loading Images',
  markdown: `
Between the Next Billion Users going online, and 2020s big nudge to get more people online for school, work, etc., increasing website performance for mobile devices and slower connections has become much more important. This is especially critical as image size has significantly increased by 260% for desktop users and 750% for mobile users [in the past 10 years alone](https://developer.mozilla.org/en-US/docs/Web/Performance/Lazy_loading#overview). One easy way to add a bit more to performance is with lazy loading, i.e. delaying image downloads until the user's viewport intersects with the image. This can be accomplished in a few different ways, but I'm going to focus on three approaches.
<br><br>

## 1. The \`loading="lazy"\` Attribute
<br>
This HTML5 attribute is a pretty straightforward approach. Simply add \`loading="lazy"\` to \`img\` tags, and voila. Now these won't be fetched until the image hits or is close to the viewport (specifically at what point fetching happens relative to the viewport  depends on the connection strength you're using). As an example:
<br><br>

\`\`\`
    <img
      loading="lazy"
      src="images/img1.jpg"
    />
\`\`\`
<br>

\`iframes\` also have access to this attribute. Hence when you're on a site that uses an infinite scroll with ads checkered in, \`iframes\` could then fetch any resources associated with the ad only when the user has scrolled far down enough.
<br><br>
As a precautionary note, it's definitely wise to have a height or width added to the \`img\` or \`iframe\`. Forgetting to do so could result in a layout shift, as the DOM painting only occurs once the image is fetched. So adding a \`height\` and \`width\` will essentially create a placeholder whitespace, which will then be populated once the resource is available.
<br><br>
And a downside to this attribute is that, sadly, browser support can be lacking, with only 73.27% support.
<br><br>

![caniuse lazy loading](https://res.cloudinary.com/dwcrpofnt/image/upload/v1616447523/nlemast/coding/2021-03-22/can-i-use-lazy_uhv4gb.png)
<br><br>

One alternative would be to use \`loading="lazy"\` in conjunction with a 3rd party library. That way the library can essentially polyfill browsers that may not yet support this feature.
<br><br>
Shopping around, there's a few to pick from, such as lozad.js. But according to npm, lazysizes.js has the most downloads, so I experimented with that.
<br><br>

## 2. lazysizes.js
<br>
Once you have this library installed in your project dependencies, lazy loading is as simple as importing lazysizes into the JS file that needs it, and adding a \`"lazyload"\` class to your \`img\` tags. Also, instead of a \`src\` tag pointing to where the image is hosted, assign the path to a \`data-src\` attribute. Easy as that.
<br><br>

\`\`\`
    <img
      class="lazyload"
      data-src="images/img7.jpg"
    />
\`\`\`
<br>

A third approach I've explored is with a native web API:
<br><br>

## 3. IntersectionObservation API
<br>
While this approach requires a bit more work (and Javascript), its ultimately more extensible. 
<br><br>
Implementing this first requires that you assign the img pathname to \`data-src\` instead of \`src\`.
<br><br>

\`\`\`
    <img
      data-src="images/img4.jpg"
      id="img4"
    />
\`\`\`
<br>

Then in your JS file, you instantiate an \`IntersectionObserver\`, passing in a render function to the constructor.
<br><br>

\`\`\`
    const observer = new IntersectionObserver(renderImage);
\`\`\`
<br>

That callback you pass in receives a list of \`IntersectionObserverEntry\` as the first argument, and an observer options argument as the second. ([MDN for more detailed specifics.](https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API))
<br><br>

\`\`\`
    const renderImage = (entries, observer) => {};

    const observer = new IntersectionObserver(renderImage);
\`\`\`
<br>

Ignoring the second parameter for now, in this function you must iterate over the \`entries\` argument, which will be a list of whatever elements you want to lazy load. For example, if you're observing a list of images, each entry would an \`img\` element. 
<br><br>
As you loop through these elements, you can then assign each \`img.datasrc\` to the \`img.src\`. I also added two conditional checks, first if \`entry.intersectionRatio\` is truthy, because only when the viewport reaches the element is the \`intersectionRatio\` not 0; and secondly, if the \`img.src\` hasn't been assigned yet, to ensure this assignment only occurs the first time the image comes into screen.
<br><br>

\`\`\`
    const renderImage = (entries) => {
      entries.forEach(entry => {
        const img = entry.target;

        if (entry.intersectionRatio && !img.src) {
          img.src = img.dataset.src;
        }
      });
    };

    const observer = new IntersectionObserver(renderImage);
\`\`\`
<br>

Now all you have to do is iterate over the elements you want to lazy load, and with your observer you instantiated, invoke \`observer.observe\` on each one, like so:
<br><br>

\`\`\`
    const renderImage = (entries) => {
      entries.forEach(entry => {
        const img = entry.target;


        if (entry.intersectionRatio && !img.src) {
          img.src = img.dataset.src;
        }
      });
    };

    const observer = new IntersectionObserver(renderImage);

    const img1 = document.querySelector('#img1');
    const img2 = document.querySelector('#img2');
    const img3 = document.querySelector('#img3');

    [img1, img2, img3].forEach(img => observer.observe(img));
\`\`\`
<br>

For this approach, as with the other approaches, only implement them if your content is located *below-the-fold*, that is, not in the immediate viewport when a user first lands on your page.
<br><br>
Try it out! Then open your network tab, and you'll notice that images aren't being downloaded until **after** the viewport has intersected with the images.
`,
};
