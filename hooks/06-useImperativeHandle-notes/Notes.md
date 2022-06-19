
# ref to component - forwardRef

You can't pass a ref to functional component.
forwardRef function allows us to transform functional component and reference it from a parent(with ref). 

```

const Button = forwardRef((props, ref) => {

    const [visible, setVisible] = useState(false);

    useImperativeHandle(ref, () => ({
        changeVisibility(){
            setVisible(!visible);
        }
    }));

    return <div>
        <button>Child button</button>
        {visible && <p>This is a text</p>}
    </div>

});

const MyComponent = () => {

    const btnRef = useRef(null);
    
    const handleClick = () => {
        btnRef.current.changeVisibility();
    };

    return (<div>

        <button onClick={handleClick}>Parent button</button>

        <Button ref={btnRef} />
    </div>);
};

```


# useImperativeHandle

useImperativeHandle allow us to create functions/methods and call them from parent component.

