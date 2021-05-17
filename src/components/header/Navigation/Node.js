import React from 'react'



function Node(props) {


    let child_nodes = null;

    if (props.children) {

        child_nodes = props.children.map((node) => {
            return (
                <Node key={node.id} node={node} children={node.subcategories} />
            )
        })
    }

    return (
        <li
            key={props.node.id}
            className={props.node.category ? `${props.node.category}__item` : `item`}
        >
            {props.node.title}
            {child_nodes ? <ul className={`${props.node.category}__list`}>{child_nodes}</ul> : null}
        </li>
    )
}

export default Node;
