
useLayoutEffect is called before the stuff is printed to the user
- maybe fetching some data

useEffect is called after everything is rendered



### My example

If useLayoutEffect doesn't specify dependencies, email will be '?'. 
useEffect will not change email

```
    const [email, setEmail] = useState('');

    useLayoutEffect(() => {
        setEmail('?');
    }, []); // dependencies

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/comments')
            .then(response => {
                setEmail(response.data[0].email);
                console.log('API WAS CALLED');
            });
    }, []);

```

    