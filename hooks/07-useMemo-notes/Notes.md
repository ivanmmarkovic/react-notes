

# useMemo

This hook is used to increase a performance of application,
when there are computation intensive tasks.

If page rerender, findLongestName will be created again, and this
function will recompute data again. Check example. 

Nobody calls that function, just state(part of it toggle) was changed.


```javascript

const getLongestName = useMemo(() => findLongestName(data), [data]);

// Array of dependencies, if data changes, function will be called


<p>{findLongestName(data)}</p> // before useMemo hook
<p>{getLongestName}</p>

```