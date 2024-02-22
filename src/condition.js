export function Item({ itemName, colorStyle, isPacked }) {
    if (isPacked) {
        return (
            <li><span style={colorStyle} > {itemName} </span> </li>
        )
    }
    // In some situations, you won’t want to render anything at all. For example, say you don’t want to show packed items at all. 
    // A component must return something. In this case, you can return null
    // if (isPacked) {
    //     return (
    //        null
    //     )
    // }
    return <li> <span style={colorStyle}> {itemName} </span> </li>
}