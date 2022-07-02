

# useEffect

This hook is used when page is render.

If you change some parts of your application, usEffect will be called because page will rerender. 

If useEffect provide data to update state's parts, this will cause page to rerender and useEffect will be called again.

Best way is to specify array of state's parts which will cause call to useEffect.

Mostly this hook is used to get data.


# example

In example shown in image *01.useEffect.png*, whenever click on button increments counter, page will rerender, because state is changed. This will call useEffect.

In example shown in image *02.useEffect dependencies specified.png*, there are no dependencies, so click on button will not cause calling of useEffect.
