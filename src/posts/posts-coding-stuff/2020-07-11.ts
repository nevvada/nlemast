const post = {
  date: '2020-07-11',
  title: 'On Files and File Readers',
  markdown: `
Ah, files. We do so much with them. And Javascript has a pretty unique way of working with them directly in the browser. For starters, we can use the \`File.File()\` API to create a file.
<br><br>

\`\`\`js
        new File(fileParts, fileName, options?);
\`\`\`

<br><br>
The constructor accepts three arguments:
<br><br>

1. \`fileParts\`: an array of strings, buffer source, or blobs
2. \`fileName\`: file name as a string
3. \`options\`: optional object with properties type (MIME type, like 'text/plain') and lastModified (number timestamp in milliseconds from Unix epoch)

<br><br>
An example would look like so:
<br><br>

\`\`\`js
        const myFile = new File(['I am hungry.'], 'myBiography.txt', {
          type: 'text/plain',
        });
\`\`\`

<br><br>
Logging out myFile will show an object with readonly properties like this:
<br><br>

\`\`\`js
        {
          lastModified: 1594486067967,
          lastModifiedDate: Sat Jul 11 2020 12:47:47,
          name: 'myBiography.txt',
          size: 12,
          type: 'text/plain',
          webkitRelativePath: '',
        }
\`\`\`

<br><br>
However, being realistic, this isn’t how you’d typically need to create a file to use in the browser. The most common way would be using forms directly. So let’s go ahead and create a file input like this:
<br><br>

![file input](https://res.cloudinary.com/dwcrpofnt/image/upload/v1613599414/nlemast/coding/2020-07-11/FileInput_qzqmhu.png)

<br><br>
And the code in our HTML:
<br><br>

\`\`\`js
        <input type="file" id="fileInput" />
\`\`\`

<br><br>
And in our Javascript:
<br><br>

\`\`\`js
        const input = document.querySelector('#fileInput');

        fileInput.addEventListener('change', (event) => {
            const file = event.target.files[0];
        });
\`\`\`

<br><br>
Inside the \`event.target\`, you can access a files property, which is an array of Files. Because this input only allows one file upload at a time—unlike a drag and drop—there will only be a single item in the array.
<br><br>
[Here’s a JSFiddle of the above example](https://jsfiddle.net/nlemast/tphw249b/18/). Try console logging out the file to see what it looks like!
<br><br>
But a \`File\` is just that, a simple file. Its properties are readonly, and there are no native methods that allow us to manipulate it. So in order to read its contents, we must use theFileReader API. So going back to our code sample, let's try instantiating a FileReader and invoking its readAsText method like such:
<br><br>

\`\`\`js
        fileInput.addEventListener('change', (event) = {
          const file = event.target.files[0];
        
          const fileReader = new FileReader();
        
          fileReader.readAsText(file);
        
          fileReader.onload = () => {
              console.log(fileReader.result);
          };
        });
\`\`\`

<br><br>
This works great if it’s a \`.txt\` file, but what about images? For this, we can use the FileReader API’s \`readAsDataURL\` method. This method reads our File as binary data and encodes it as a URL in base64, giving us a URL string we can add as an image src. Now, if we wanted to append an image to our HTML, we can create an img tag and simply assign its src to the dataURL.
<br><br>

\`\`\`js
        fileInput.addEventListener('change', (event) = {
          const file = event.target.files[0];
        
          const fileReader = new FileReader();
        
          fileReader.readAsDataURL(file);
        
          fileReader.onload = () => {
              const dataURL = fileReader.result;
          
              const img = new Image();
              img.src = dataURL;
          
              // div we add to our DOM
              div.appendChild(img);
          };
        });
\`\`\`

<br><br>
[Here's a link to an example!](https://jsfiddle.net/nlemast/3t6zrkhf/10/)
`,
};

export default post;
