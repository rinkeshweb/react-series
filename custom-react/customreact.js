function costumRender(reactElement, container) {
    // const domElement = document.createElement(reactElement.type);
    // domElement.setAttribute('href', reactElement.props.link);
    // domElement.setAttribute('target', reactElement.props.target);
    // domElement.innerHTML = reactElement.children;
    // container.append(domElement);


    const domElem = document.createElement(reactElement.type);
    domElem.innerHTML = reactElement.children;
    for (const prop in reactElement.props) {
        if (prop == 'children') continue;
        domElem.setAttribute(prop, reactElement.props[prop])
    }
    container.appendChild(domElem);
}


const reactElement = {
    type: 'a',
    props: {
        href: 'https://google.com',
        target: '_blank'
    },
    children: 'Click me to visit GOOGLE'
}

console.log(reactElement);

const mainContainer = document.querySelector('#root');

costumRender(reactElement, mainContainer);
