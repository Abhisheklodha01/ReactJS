function customRender(reactElement, maincontainer) {

    // const domElemnt = document.createElement(reactElement.type)

    // domElemnt.innerHTML = reactElement.children
    // domElemnt.setAttribute('href', reactElement.props.href)
    // domElemnt.setAttribute('target', reactElement.props.target)

    // maincontainer.appendChild(domElemnt)

   const domElement = document.createElement(reactElement.type)

   domElement.innerHTML = reactElement.children
   for (const prop in reactElement.props) {

    if (prop === 'children') continue;

    domElement.setAttribute(prop, reactElement.props[prop])
   }

   maincontainer.appendChild(domElement)

}


const reactElement = {
    type: "a",
    props: {
        href: 'https://google.com',
        target: '_blank'
    },
    children: "click me to visit google"
}


const maincontainer = document.getElementById('root')

customRender(reactElement, maincontainer)
