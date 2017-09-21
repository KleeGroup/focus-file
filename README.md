Focus file
=====================

[![master](https://travis-ci.org/KleeGroup/focus-files.svg?branch=master)](https://travis-ci.org/KleeGroup/focus-files)
[![develop](https://travis-ci.org/KleeGroup/focus-files.svg?branch=develop)](https://travis-ci.org/KleeGroup/focus-files)

[![Dependencies Status](https://david-dm.org/KleeGroup/focus-files.svg)](https://david-dm.org/KleeGroup/focus-files)
[![Dev Dependencies Status](https://david-dm.org/KleeGroup/focus-files/dev-status.svg)](https://david-dm.org/KleeGroup/focus-files?type=dev)
[![Peer Dependencies Status](https://david-dm.org/KleeGroup/focus-files/peer-status.svg)](https://david-dm.org/KleeGroup/focus-files?type=peer)

Focus file addon. Uses [DropzoneJS](http://www.dropzonejs.com/).

### Usage

In your project, do the following :
```
npm i -D focus-file@latest
```

If your running on brunchJs, don't forget to copy the downloaded script to your `vendor` folder.

Once correctly added, the component will be available on the `window` as `FocusFile`.

### Example

```jsx
<FocusFile url='your/url'/>
```

### Advanced usage

The component uses internally a `store`, fed with all the files dropped in the file upload, whatever the upload status was.

You can access this store with `refToYourFocusFileComponent.props.store`.

### Adding DropzoneJS events

If you want to catch [DropzoneJS events](http://www.dropzonejs.com/#events), you can access the Dropzone object through `refToYourFocusFileComponent.dropzone`.

### Dependencies

* [DropzoneJS](http://www.dropzonejs.com)
* [Focus core](https://github.com/KleeGroup/focus-core)
* [ReactJS](https://facebook.github.io/react/)
