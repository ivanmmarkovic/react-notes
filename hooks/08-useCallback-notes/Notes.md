


When you pass function to child component, that function 
will be recreated whenever a component is rerender.

When you change state(toggle part) function will be rerendered.


useMemo - store value from function that is memoized
useCallback - store function



useEffect will be called every time when there is a change in 
returnComment function. 

```

    useEffect(() => {
        console.log('FUNCTION WAS CALLED');
    }, [returnComment]);

```


useCallback - function will be recreated when data(part of the state) changes
```

    const returnComment = useCallback(() => {
        return data;
    }, [data]);

```