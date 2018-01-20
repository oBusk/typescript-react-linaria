# typescript-react-linaria

Using `linaria/babel` preset in dev will not work because webpack will not pickup changes to the css files in cache directory when watchIgnore-ing cache directory. If not watchIgnore-ing cache directory, causes looped watch-trigger on `npm start`.
