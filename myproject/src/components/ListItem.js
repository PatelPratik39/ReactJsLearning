// First way to declare Props 

// const ListItem = (props) => {
//     return ( <div>
//         {props.name}
//     </div> );
// }
 
// export default ListItem;

// second way to declare Props 
const ListItem = ({name}) => {
    return ( <div>
        {name}
    </div> );
}
 
export default ListItem;